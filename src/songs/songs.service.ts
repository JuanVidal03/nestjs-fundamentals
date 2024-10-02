import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';

@Injectable()
export class SongsService {

    private readonly songs = [];
    
    create(song:CreateSongDto){
        this.songs.push(song);
        return {
            statusCode: HttpStatus.CREATED,
            message: "Song created successfully!",
            data: song,
        };
    }

    findAll(){
        return {
            statusCode: HttpStatus.OK,
            message: "Get all songs successfully!",
            data: this.songs,
        };
    }

}
