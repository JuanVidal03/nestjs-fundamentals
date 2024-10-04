import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { Song } from './interfaces/song.interface';

@Injectable()
export class SongsService {

    private readonly songs:Song[] = [];
    
    create(song:CreateSongDto): Song{

        try {
            this.songs.push(song);
            return song;
            
        } catch (error) {
            throw new HttpException(
                "Error creating a song",
                HttpStatus.INTERNAL_SERVER_ERROR, {
                    cause: new Error(error),
                },
            );
        }
    }

    findAll(): Song[]{

        try {
            
            const songs: Song[] = this.songs; 
            return songs;
            
        } catch (error) {
            throw new HttpException(
                "Error gettgin all songs.",
                HttpStatus.INTERNAL_SERVER_ERROR, {
                    cause: new Error(error),
                }
            );
        }

    }

    findOne(id: string): Song{
        try {
            
            const foundSong = this.songs.find(song => song.id === id);

            if (!foundSong) throw new NotFoundException(`Song with id: ${id} doesn't exists.`);

            return foundSong;

        } catch (error) {
            throw new HttpException(
                `Error getting song with id: ${id}`,
                HttpStatus.INTERNAL_SERVER_ERROR, {
                    cause: error,
                },
            );
        }
    }

}
