import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Album } from 'src/app/types/spotify';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styles: [],
})
export class AlbumComponent implements OnInit, OnDestroy {
  public album: Album = {} as Album;

  public subscription: Subscription = {} as Subscription;

  public loading: boolean = true;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _spotifyService: SpotifyService
  ) {}

  ngOnInit(): void {
    this.subscription = this._route.params.subscribe((params) => {
      this._spotifyService.getAlbumById(params.id).then((album: Album) => {
        this.album = album;
        this.loading = false;
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public goToArtist(id: string) {
    this._router.navigate(['/artist-profile', id]);
  }
}
