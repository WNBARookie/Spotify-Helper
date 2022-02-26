import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { SpotifyApiActionService } from 'src/app/shared/services/spotify-api-action.service';
import { TrackWithAudioAnalysis } from '../../interface';

@Component({
  selector: 'app-song-info-details',
  templateUrl: './song-info-details.component.html',
  styleUrls: ['./song-info-details.component.scss'],
})
export class SongInfoDetailsComponent implements OnInit {
  songID: any;
  trackWithAnalysis!: TrackWithAudioAnalysis;

  constructor(
    private activatedroute: ActivatedRoute,
    private spotifyService: SpotifyApiActionService
  ) {}

  ngOnInit(): void {
    this.songID = this.activatedroute.snapshot.paramMap.get('id');

    // this.spotifyService.getTrack(this.songID).subscribe((result) => {
    //   console.log(result);
    // });

    // this.spotifyService.getAudioAnalysis(this.songID).subscribe((result) => {
    //   console.log(result);
    // });

    // this.trackWithAnalysis$ = combineLatest([
    //   this.spotifyService.getTrack(this.songID),
    //   this.spotifyService.getAudioAnalysis(this.songID),
    // ]).pipe(
    //   map(([track, analysis]) => {
    //     ({
    //       ...track,
    //       ...analysis,
    //     } as TrackWithAudioAnalysis);
    //   }),
    //   tap((x: any) => console.log(x))
    // );

    combineLatest([
      this.spotifyService.getTrack(this.songID),
      this.spotifyService.getAudioAnalysis(this.songID),
    ]).subscribe(([track, analysis]) => {
      this.trackWithAnalysis = {
        ...track,
        ...analysis,
      } as TrackWithAudioAnalysis;
    });
  }
}
