import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Artist } from 'src/app/types/spotify';

@Component({
  selector: 'app-artist-profile',
  templateUrl: './artist-profile.component.html',
  styles: [],
})
export class ArtistProfileComponent implements OnInit {
  public artist: Artist = {} as Artist;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _spotifyService: SpotifyService
  ) {}

  ngOnInit(): void {
    const id = this._activatedRoute.snapshot.params.id;

    this._spotifyService.getArtistById(id).then((artist: Artist) => {
      this.artist = artist;
    });
  }
}
