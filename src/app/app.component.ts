import { Component } from '@angular/core';

import { Album } from './albums/album.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-albums';
  albumsArray: Album[];

  titleCounter = 1;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.albumsArray = [
      {
        "id": 1,
        "artist": "Tremonti",
        "album_name": "Dust",
        "genre": "Pop/Rock",
        "price": 11.99,
        "currency": "USD"
      },
      {
        "id": 2,
        "artist": "Bon Jovi",
        "album_name": "7800 Fahrerenheit",
        "genre": "Pop/Rock",
        "price": 7,
        "currency": "EUR",
      },
      {
        "id": 3,
        "artist": "The Beatles",
        "album_name": "The White Album",
        "genre": "Pop/Rock",
        "price": 12,
        "currency": "EUR"
      }
    ];

    console.log(JSON.stringify(this.albumsArray, null, 4));

    let interval = setInterval(() => this.titleCounter++, 2000);

    setTimeout(() => clearInterval(interval), 6000);
  }
}
