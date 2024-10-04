import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song.dto';
import { ResponseSongDto } from './dto/response-song.dto';
import { Song } from './interfaces/song.interface';

@Controller('songs')
export class SongsController {

    constructor(
        private songService: SongsService
    ){}

    @Post()
    createSong(
        @Body() newSong:CreateSongDto
    ):ResponseSongDto<Song> {
        
        const createdSong: Song = this.songService.create(newSong);

        return {
            statusCode: HttpStatus.CREATED,
            message: "Song created successfully!",
            data: createdSong,
        };
    }

    @Get()
    findAll():ResponseSongDto<Song[]>{

        const songs: Song[] = this.songService.findAll();

        return {
            statusCode: HttpStatus.OK,
            message: "Get all songs successfully!",
            data: songs,
        };
    }

    @Get(":id")
    findOne(
        @Param(
            "id",
            new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
        ) id:string
    ): ResponseSongDto<Song>{

        const foundSong: Song = this.songService.findOne(id);

        return {
            statusCode: HttpStatus.OK,
            message: "Get all songs successfully!",
            data: foundSong,
        };
    }

}
