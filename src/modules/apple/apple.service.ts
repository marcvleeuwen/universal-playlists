import { Injectable } from "@nestjs/common";
import { SongDto } from "../../core/models/common/song.dto";
import { PlaylistDataDto } from "../../core/models/apple/playlist-data.dto";
import { TrackDto } from "../../core/models/apple/track.dto";
import { DataCommonDto } from "../../core/models/apple/data.common.dto";
import { HttpService } from "@nestjs/axios";

@Injectable()
export class AppleService {
  constructor(private readonly http: HttpService) {
  }

  async getPlaylistData(url: string): Promise<PlaylistDataDto> {
    const response = await this.http.get(url).toPromise();
    const data = JSON.parse(
      response.data
        .split(`<script type="fastboot/shoebox" id="shoebox-media-api-cache-amp-music">`)[1]
        .split(`</script>`)[0]
    );
    const extract = JSON.parse(data[Object.keys(data)[1]]).d[0];
    const mapped: PlaylistDataDto = {
      id: extract.id,
      href: extract.href,
      type: extract.type,
      attributes: extract.attributes,
      tracks: extract.relationships.tracks.data
    };
    return mapped;
  }

  async getSongsFromData(data: PlaylistDataDto): Promise<Array<SongDto>> {
    return data.tracks.map((track: TrackDto) => {
      return {
        originService: "apple",
        id: track.id,
        href: track.href,
        title: track.attributes.name,
        artists: track.relationships.artists.data.map((data: DataCommonDto) => data.attributes.name),
        album: track.attributes.albumName,
        artwork: track.attributes.artwork,
        url: track.attributes.url,
        isrc: track.attributes.isrc,
        metadata: {
          duration: track.attributes.durationInMillis
        }
      };
    });
  }
}
