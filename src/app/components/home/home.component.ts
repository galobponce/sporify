import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Album, ReleasesSearch } from 'src/app/types/spotify';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  public releases: Album[] = [] as Album[];

  public loading: boolean = true;

  constructor(private _spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this._spotifyService.getReleases().then((search: ReleasesSearch) => {
      this.releases = search.albums.items;
      this.loading = false;
    });
  }
}
