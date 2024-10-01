import { Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {

    constructor(
        private songService: SongsService
    ){}

    @Get()
    findAll():string{
        return "All songs";
    }

    @Get(":id")
    findOne(@Param("id") id:string ):string {
        return `Song by id: ${id}`;
    }

    @Post()
    createSong(@Req() request: Request):string {
        return "song created";
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
