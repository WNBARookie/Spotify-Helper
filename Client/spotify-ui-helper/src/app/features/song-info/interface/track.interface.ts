export interface Track {
  id: string;
  title: string;
  album: Album;
  artists: string[];
  duration: string;
  explicit: boolean;
  previewURL: string;
}

export interface TrackWithAudioAnalysis {
  id: string;
  title: string;
  album: Album;
  artists: string[];
  duration: string;
  explicit: boolean;
  previewURL: string;
  key: string;
  mode: string;
  tempo: number;
  timeSignature: string;
}

export interface Album {
  id?: string;
  title: string;
  albumCover: string;
  artists: string[];
}

export interface AudioAnalysis {
  id: string;
  duration: string;
  key: string;
  mode: string;
  tempo: number;
  timeSignature: string;
}
