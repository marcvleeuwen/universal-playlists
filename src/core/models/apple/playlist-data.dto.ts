import { TrackDto } from "./track.dto";

export interface PlaylistDataDto {
  id: string;
  type?: string;
  href?: string;
  attributes: {
    artwork: {
      width: number;
      height: number;
      url: string;
      bgColor: string;
      textColor1: string;
      textColor2: string;
      textColor3: string;
      textColor4: string;
    };
    isChart: false;
    url: string;
    trackCount: number;
    lastModifiedDate: string;
    name: string;
    playlistType: string;
    curatorName: string;
    playParams: {
      id: string;
      kind: string;
    };
    curatorSocialHandle: string;
  };
  tracks: Array<TrackDto>;
}
