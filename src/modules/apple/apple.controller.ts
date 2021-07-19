import { Controller, Get, Query, Res } from '@nestjs/common';
import { StatusDto } from '../../core/models/common/status.dto';
import { Response } from 'express';
import { AppleService } from './apple.service';
import { SongDto } from '../../core/models/common/song.dto';
import { PlaylistDataDto } from '../../core/models/apple/playlist-data.dto';

@Controller('apple')
export class AppleController {
	constructor(private readonly appleService: AppleService) {}

	@Get('/')
	default(): StatusDto {
		return {
			timestamp: new Date(),
			service: 'Apple'
		};
	}

	@Get('playlist')
	async getPlaylistData(@Query() query: { playlistId: string }, @Res() res: Response): Promise<Response> {
		try {
			const data: PlaylistDataDto = await this.appleService.getPlaylistData(query.playlistId);
			return res.status(200).send(data);
		} catch (error) {
			res.send(error);
		}
	}

	@Get('songs')
	async getPlaylistSongs(@Query() query: { playlistId: string }, @Res() res: Response): Promise<Response> {
		try {
			const data: PlaylistDataDto = await this.appleService.getPlaylistData(query.playlistId);
			const songs: Array<SongDto> = await this.appleService.getSongsFromData(data);
			return res.status(200).send(songs);
		} catch (error) {
			res.send(error);
		}
	}
}
