import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Artist, TopTracksSearch, Track } from 'src/app/types/spotify';

@Component({
  selector: 'app-artist-profile',
  templateUrl: './artist-profile.component.html',
  styles: [],
})
export class ArtistProfileComponent implements OnInit, OnDestroy {
  public artist: Artist = {} as Artist;

  public topTracks: Track[] = [];

  public subscription: Subscription = {} as Subscription;

  public loading: boolean = true;

  constructor(
    private _route: ActivatedRoute,
    private _spotifyService: SpotifyService
  ) {}

  ngOnInit(): void {
    this.subscription = this._route.params.subscribe((params) => {
      this._spotifyService.getArtistById(params.id).then((artist: Artist) => {
        this.artist = artist;
      });

      this._spotifyService
        .getTopTracksFromArtistId(params.id)
        .then((tracksSearch: TopTracksSearch) => {
          this.topTracks = tracksSearch.tracks;
          this.loading = false;
        });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
