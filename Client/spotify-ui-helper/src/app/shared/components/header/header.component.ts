import { Component, OnInit } from '@angular/core';
import { SpotifyApiActionService } from '../../services/spotify-api-action.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  username!: string;
  profilePic!: string;

  constructor(private spotifyService: SpotifyApiActionService) {}

  ngOnInit(): void {
    this.getUserProfileInfo();
  }

  getUserProfileInfo() {
    this.spotifyService.getUserProfileInfo().subscribe((data) => {
      this.username = data.display_name;
      this.profilePic = data.images[0].url;
    });
  }
}
