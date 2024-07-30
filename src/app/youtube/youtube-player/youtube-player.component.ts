import { Component } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-youtube-player',
  standalone: true,
  imports: [YouTubePlayer],
  template: '3. Este componente es un contenedor de la API oficial de YouTube.<br> <youtube-player videoId="mVjYG9TSN88"/>'
})
export class YoutubePlayerComponent {

}
