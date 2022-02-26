import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'artist',
})
export class ArtistPipe implements PipeTransform {
  transform(artists: string[]): string {
    return artists.join(', ');
  }
}
