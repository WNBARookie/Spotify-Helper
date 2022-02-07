const SpotifyWebApi = require("spotify-web-api-node");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");

const scopes = [
  "ugc-image-upload",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "streaming",
  "app-remote-control",
  "user-read-email",
  "user-read-private",
  "playlist-read-collaborative",
  "playlist-modify-public",
  "playlist-read-private",
  "playlist-modify-private",
  "user-library-modify",
  "user-library-read",
  "user-top-read",
  "user-read-playback-position",
  "user-read-recently-played",
  "user-follow-read",
  "user-follow-modify",
];

const spotifyApi = new SpotifyWebApi({
  redirectUri: process.env.SPOTIFY_CALLBACK,
  clientId: process.env.SPOTIFY_ID,
  clientSecret: process.env.SPOTIFY_SECRET,
});

const app = express();
app.use(bodyParser.json());
app.use(cors());

// ----- AUTHORIZATION -----

app.get("/login", (req, res) => {
  res.redirect(spotifyApi.createAuthorizeURL(scopes));
});

app.get("/callback", (req, res) => {
  const error = req.query.error;
  const code = req.query.code;
  const state = req.query.state;

  if (error) {
    console.error("Callback Error:", error);
    res.send(`Callback Error: ${error}`);
    return;
  }

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      const access_token = data.body["access_token"];
      const refresh_token = data.body["refresh_token"];
      const expires_in = data.body["expires_in"];

      spotifyApi.setAccessToken(access_token);
      spotifyApi.setRefreshToken(refresh_token);

      console.log("access_token:", access_token);
      console.log("refresh_token:", refresh_token);

      console.log(
        `Sucessfully retreived access token. Expires in ${expires_in} s.`
      );
      //   res.send("Success! You can now close the window.");
      res.redirect("http://localhost:4200/home");

      setInterval(async () => {
        const data = await spotifyApi.refreshAccessToken();
        const access_token = data.body["access_token"];

        console.log("The access token has been refreshed!");
        console.log("access_token:", access_token);
        spotifyApi.setAccessToken(access_token);
      }, (expires_in / 2) * 1000);
    })
    .catch((error) => {
      console.error("Error getting Tokens:", error);
      res.send(`Error getting Tokens: ${error}`);
    });
});

// ----- METADATA FOR TRACKS, ALBUMS, ARTISTS -----

// get album by id
app.get("/getAlbum/:id", (req, res) => {
  spotifyApi.getAlbum(req.params.id).then(
    function (data) {
      res.send(data.body);
    },
    function (err) {
      console.error(err);
    }
  );
});

// get artist by id
app.get("/getArtist/:id", (req, res) => {
  spotifyApi.getArtist(req.params.id).then(
    function (data) {
      res.send(data.body);
    },
    function (err) {
      console.error(err);
    }
  );
});

// get track by id
app.get("/getTrack/:id", (req, res) => {
  spotifyApi.getTrack(req.params.id).then(
    function (data) {
      res.send(data.body);
    },
    function (err) {
      console.error(err);
    }
  );
});

// get audio features for a track
app.get("/getAudioFeatures/:id", (req, res) => {
  spotifyApi.getAudioFeaturesForTrack(req.params.id).then(
    function (data) {
      res.send(data.body);
    },
    function (err) {
      done(err);
    }
  );
});

// search tracks whose name, album or artist contains 'xxxx'
app.get("/searchForTracks/:term", (req, res) => {
  spotifyApi.searchTracks(req.params.term).then(
    function (data) {
      //   console.log(data.body);
      //   console.log(data.body.tracks.items[0]);
      //   let albumCover = data.body.tracks.items[0].album.images[0].url;
      //   let title = data.body.tracks.items[0].name;
      //   let artists = data.body.tracks.items[0].artists.map(
      //     (artist) => artist.name
      //   );
      //   let id = data.body.tracks.items[0].id;

      let items = data.body.tracks.items;
      let songList = [];

      items.map((item) => {
        songList.push({
          id: item.id,
          title: item.name,
          artists: item.artists.map((artist) => artist.name),
          albumCover: item.album.images[0].url,
        });
      }),
        res.send(songList);
    },
    function (err) {
      console.error(err);
    }
  );
});

app.listen(process.env.PORT, () =>
  console.log(
    `HTTP Server up. Now go to http://localhost:${process.env.PORT}/login in your browser.`
  )
);
