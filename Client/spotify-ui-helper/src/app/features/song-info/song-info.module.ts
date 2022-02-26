import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongSearchComponent } from './components/song-search/song-search.component';
import { SongInfoDetailsComponent } from './components/song-info-details/song-info-details.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: SongSearchComponent },
  { path: 'song-details', component: SongInfoDetailsComponent },
];

@NgModule({
  declarations: [SongSearchComponent, SongInfoDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SongInfoModule {}
