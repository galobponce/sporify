import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { ImagePipe } from './pipes/image.pipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NewReleaseComponent } from './components/new-release/new-release.component';
import { ArtistProfileComponent } from './components/artist-profile/artist-profile.component';
import { AlbumComponent } from './components/album/album.component';
import { SearchComponent } from './components/search/search.component';
import { AlbumItemComponent } from './components/album-item/album-item.component';
import { TrackItemComponent } from './components/track-item/track-item.component';
import { ArtistItemComponent } from './components/artist-item/artist-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    LoadingComponent,
    NewReleaseComponent,
    ImagePipe,
    ArtistProfileComponent,
    AlbumComponent,
    SearchComponent,
    AlbumItemComponent,
    TrackItemComponent,
    ArtistItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
