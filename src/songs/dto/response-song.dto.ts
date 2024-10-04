export class ResponseSongDto<song> {
    statusCode: number;
    message: string;
    data: song;
}
