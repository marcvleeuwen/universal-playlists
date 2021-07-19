export interface SongDto {
  originService: 'apple' | 'spotify' | 'youtube';
  id: string;
  title: string;
  artists: Array<string>;
  album: string;
  artwork?: any;
  metadata: {
    duration: number;
  };
  isrc: string;
  url: string;
}
