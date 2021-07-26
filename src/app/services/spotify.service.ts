import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseHttpService } from './base-http.service';
import { environment } from 'src/environments/environment';
import {
  Album,
  Artist,
  AlbumsSearch,
  ArtistsSearch,
  ReleasesSearch,
  TracksSearch,
  TopTracksSearch,
} from 'src/app/types/spotify';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService extends BaseHttpService {
  private headers: HttpHeaders = new HttpHeaders({
    Authorization: `Bearer ${environment.access_token}`,
  });

  constructor(public http: HttpClient) {
    super(http);
  }

  get apiUrl(): string {
    return 'https://api.spotify.com/v1/';
  }

  public getReleases(): Promise<ReleasesSearch> {
    const url = this.apiUrl + 'browse/new-releases';
    return this.get<ReleasesSearch>(url, this.headers);
  }

  public getTopTracksFromArtistId(
    id: string | number
  ): Promise<TopTracksSearch> {
    const url = this.apiUrl + `artists/${id}/top-tracks?market=AR`;
    return this.get<TopTracksSearch>(url, this.headers);
  }

  public getSongsByTerm(term: string): Promise<TracksSearch> {
    const url = this.apiUrl + `search?q=${term}&type=track&market=AR&limit=8`;
    return this.get<TracksSearch>(url, this.headers);
  }

  public getAlbumsByTerm(term: string): Promise<AlbumsSearch> {
    const url = this.apiUrl + `search?q=${term}&type=album&market=AR&limit=5`;
    return this.get<AlbumsSearch>(url, this.headers);
  }

  public getArtistsByTerm(term: string): Promise<ArtistsSearch> {
    const url = this.apiUrl + `search?q=${term}&type=artist&market=AR&limit=10`;
    return this.get<ArtistsSearch>(url, this.headers);
  }

  public getArtistById(id: string | number): Promise<Artist> {
    const url = this.apiUrl + `artists/${id}`;
    return this.get<Artist>(url, this.headers);
  }

  public getAlbumById(id: string | number): Promise<Album> {
    const url = this.apiUrl + `albums/${id}`;
    return this.get<Album>(url, this.headers);
  }
}
