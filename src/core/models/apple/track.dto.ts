import { DataCommonDto } from './data.common.dto';

export interface TrackDto {
  id: string;
  type?: string;
  href?: string;
  attributes?: {
    previews?: Array<{ url?: string }>;
    artwork?: {
      width?: number;
      height?: number;
      url?: string;
      bgColor?: string;
      textColor1?: string;
      textColor2?: string;
      textColor3?: string;
      textColor4?: string;
    };
    artistName: string;
    url?: string;
    discNumber?: number;
    genreNames?: Array<string>;
    hasTimeSyncedLyrics?: boolean;
    isMasteredForItunes?: boolean;
    durationInMillis?: number;
    releaseDate?: string;
    name: string;
    isrc: string;
    audioTraits?: Array<string>;
    hasLyrics?: boolean;
    albumName?: string;
    playParams?: {
      id?: string;
      kind?: string;
    };
    trackNumber?: number;
    audioLocale?: string;
    composerName?: string;
    popularity?: number;
  };
  relationships?: {
    composers?: {
      href?: string;
      data?: Array<DataCommonDto>;
    };
    artists?: {
      href?: string;
      data?: Array<DataCommonDto>;
    };
  };
}
