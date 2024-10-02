import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song.dto';

@Controller('songs')
export class SongsController {

    constructor(
        private songService: SongsService
    ){}

    @Get()
    findAll():any{
        const songs = this.songService.findAll();
        return songs;
    }

    @Get(":id")
    findOne(@Param("id") id:string ):string {
        return `Song by id: ${id}`;
    }

    @Post()
    createSong(@Body() newSong:CreateSongDto):any {
        const createdSong = this.songService.create(newSong);
        return createdSong;
    }

    @Put(":id")
    updateById(
        @Param("id") id:string,
        @Req() request:Request
    ):string{
        return `updated song with id: ${id}`;
    }

    @Delete(":id")
    deleteById(@Param("id") id:string):string {
        return `Song deleted with id: ${id}`;
    }

}
