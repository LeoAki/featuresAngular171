import { Component } from '@angular/core';
import {GoogleMap} from '@angular/google-maps';

@Component({
  selector: 'app-map-google',
  standalone: true,
  imports: [GoogleMap],
  templateUrl: './map-google.component.html',
  styleUrl: './map-google.component.css'
})
export class MapGoogleComponent {

  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;
  display: google.maps.LatLngLiteral | undefined;

  moveMap(event: google.maps.MapMouseEvent) {
    this.center = (event.latLng?.toJSON() || {lat: 24, lng: 12});
  }

  move(event: google.maps.MapMouseEvent) {
    this.display = event.latLng?.toJSON();
  }

}
