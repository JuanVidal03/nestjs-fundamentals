import {
    IsArray,
    IsDateString,
    IsMilitaryTime,
    IsNotEmpty,
    IsString
} from 'class-validator';

export class CreateSongDto{
    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @IsNotEmpty()
    @IsArray()
    readonly artists: string[];

    @IsNotEmpty()
    @IsDateString()
    readonly realeaseDate: Date;

    @IsNotEmpty()
    @IsMilitaryTime()
    readonly duration: Date;
}
