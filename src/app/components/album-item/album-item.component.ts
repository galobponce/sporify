import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from 'src/app/types/spotify';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styles: [],
})
export class AlbumItemComponent {
  @Input() public album: Album = {} as Album;

  constructor(private _router: Router) {}

  public goToAlbum(id: string) {
    this._router.navigate(['/album', id]);
  }

  public goToArtist(id: string) {
    this._router.navigate(['/artist-profile', id]);
  }
}
