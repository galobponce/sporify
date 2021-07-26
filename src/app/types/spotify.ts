export interface Image {
  height: number;
  width: number;
  url: string;
}

export interface External_urls {
  spotify: string;
}

export interface Artist {
  id: string;
  name: string;
  images: Image[];
  followers: {
    total: number;
  };
  genres: string[];
  type: string;
  href: string;
  uri: string;
  external_urls: External_urls;
}

export interface Album {
  id: string;
  name: string;
  type: string;
  album_type: string;
  artists: Artist[];
  images: Image[];
  tracks: DataTracks;
  release_date: string;
  total_tracks: number;
  uri: string;
  external_urls: External_urls;
}

export interface Track {
  id: number;
  name: string;
  album: Album;
  artists: Artist[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  preview_url: string;
  uri: string;
  external_urls: External_urls;
}

export interface DataArtists {
  href: string;
  items: Artist[];
  limit: number;
  offset: number;
  previous: any;
  total: number;
}

export interface DataAlbums {
  href: string;
  items: Album[];
  limit: number;
  offset: number;
  previous: any;
  total: number;
}

export interface DataTracks {
  href: string;
  items: Track[];
  limit: number;
  offset: number;
  previous: any;
  total: number;
}

export interface ArtistsSearch {
  artists: DataArtists;
}

export interface TracksSearch {
  tracks: DataTracks;
}

export interface AlbumsSearch {
  albums: DataAlbums;
}

export interface ReleasesSearch {
  albums: DataAlbums;
}
