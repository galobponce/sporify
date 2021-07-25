import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Track } from 'src/app/types/spotify';

@Component({
  selector: 'app-track-item',
  templateUrl: './track-item.component.html',
  styles: [],
})
export class TrackItemComponent {
  @Input() public track: Track = {} as Track;

  constructor(private _router: Router) {}

  public goToAlbum(id: string) {
    this._router.navigate(['/album', id]);
  }

  public goToArtist(id: string) {
    this._router.navigate(['/artist-profile', id]);
  }
}
