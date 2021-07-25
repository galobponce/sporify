import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Artist } from 'src/app/types/spotify';

@Component({
  selector: 'app-artist-item',
  templateUrl: './artist-item.component.html',
  styles: [],
})
export class ArtistItemComponent {
  @Input() public artist: Artist = {} as Artist;

  constructor(private _router: Router) {}

  public goToArtist(id: string) {
    this._router.navigate(['/artist-profile', id]);
  }
}
