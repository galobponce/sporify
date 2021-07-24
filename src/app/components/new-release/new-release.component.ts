import { Component, Input } from '@angular/core';
import { Album } from 'src/app/types/spotify';

@Component({
  selector: 'app-new-release',
  templateUrl: './new-release.component.html',
  styles: [],
})
export class NewReleaseComponent {
  @Input() public release: Album = {} as Album;

  constructor() {}

  public goToArtist(id: string) {
    console.log(id);
  }
}
