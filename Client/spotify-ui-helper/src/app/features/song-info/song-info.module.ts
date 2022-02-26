import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongSearchComponent } from './components/song-search/song-search.component';
import { SongInfoDetailsComponent } from './components/song-info-details/song-info-details.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ArtistPipe } from '../../shared/pipes/artist.pipe';

const routes: Routes = [
  { path: '', component: SongSearchComponent },
  { path: 'song-details', component: SongInfoDetailsComponent },
];

@NgModule({
  declarations: [SongSearchComponent, SongInfoDetailsComponent, ArtistPipe],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
  ],
})
export class SongInfoModule {}
