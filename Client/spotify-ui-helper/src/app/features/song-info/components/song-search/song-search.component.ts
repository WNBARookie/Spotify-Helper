import { Component, OnInit } from '@angular/core';
import { SpotifyApiActionService } from 'src/app/shared/services/spotify-api-action.service';
import { SongSearchResult } from '../../interface';

@Component({
  selector: 'app-song-search',
  templateUrl: './song-search.component.html',
  styleUrls: ['./song-search.component.scss'],
})
export class SongSearchComponent implements OnInit {
  searchTerm: string = '';
  songSearchResults: SongSearchResult[] = [];

  constructor(private spotifyService: SpotifyApiActionService) {}

  ngOnInit(): void {}

  searchForSong() {
    this.spotifyService.searchForTracks(this.searchTerm).subscribe((result) => {
      this.songSearchResults = result;
    });
  }
}
