import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from 'src/app/types/spotify';

@Component({
  selector: 'app-new-release',
  templateUrl: './new-release.component.html',
  styles: [],
})
export class NewReleaseComponent {
  @Input() public release: Album = {} as Album;

  constructor(private _router: Router) {}

  public goToArtist(id: string) {
    this._router.navigate(['/artist-profile', id]);
  }
}
