import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArtistPipe } from '../../shared/pipes/artist.pipe';

@NgModule({
  declarations: [ArtistPipe],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class SongInfoModule {}
