import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import {
  Album,
  AlbumsSearch,
  Artist,
  Track,
  TracksSearch,
  ArtistsSearch,
} from 'src/app/types/spotify';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  public term!: string;

  public searched: boolean = false;

  public tracks: Track[] = [];

  public albums: Album[] = [];

  public artists: Artist[] = [];

  constructor(private _spotifyService: SpotifyService) {}

  public searchByTerm(term: string) {
    if (
      term === '' ||
      term === this.term ||
      !term.match(/^[0-9a-zñ '?¿!¡]+$/i)
    ) {
      return;
    }

    this.searched == false ? (this.searched = true) : null;

    this.term = term;

    this._spotifyService
      .getSongsByTerm(term)
      .then((tracksSearch: TracksSearch) => {
        this.tracks = tracksSearch.tracks.items;
      });

    this._spotifyService
      .getAlbumsByTerm(term)
      .then((albumsSearch: AlbumsSearch) => {
        this.albums = albumsSearch.albums.items;
      });

    this._spotifyService
      .getArtistsByTerm(term)
      .then((artistsSearch: ArtistsSearch) => {
        this.artists = artistsSearch.artists.items;
      });
  }
}
