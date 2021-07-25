import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Album } from 'src/app/types/spotify';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styles: [],
})
export class AlbumComponent implements OnInit {
  public album: Album = {} as Album;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _spotifyService: SpotifyService
  ) {}

  ngOnInit(): void {
    const id = this._activatedRoute.snapshot.params.id;

    this._spotifyService.getAlbumById(id).then((album: Album) => {
      this.album = album;
    });
  }
}
