import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { YoutubePlayerComponent } from './youtube/youtube-player/youtube-player.component';
import { InputSignalsComponent } from './feature/angular/signal-inputs/input-signals/input-signals.component';
import { FnsFechaComponent } from './feature/angular/date-fns/fns-fecha/fns-fecha.component';
import { MapGoogleComponent } from './feature/angular/google-maps/map-google/map-google.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InputSignalsComponent,
    FnsFechaComponent,
    YoutubePlayerComponent,
    MapGoogleComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular 17.1';
}
