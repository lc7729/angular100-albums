import { Component, OnInit } from '@angular/core';

import { Album } from '../album.model';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  albums: Album[];

  constructor() { }

  parentFunctionHandler(album) {
    alert('Album ' + album.album_name + ' was sent from the album card component');
  }

  ngOnInit() {
    this.albums = [
      {
        id: 1,
        artist: "Tremonti",
        album_name: "Dust",
        genre: "Pop/Rock",
        price: 12,
        currency: "USD"
      },
      {
        id: 2,
        artist: "Bon Jovi",
        album_name: "7800 Fahrerenheit",
        genre: "Pop/Rock",
        price: 7,
        currency: "EUR"
      },
      {
        id: 3,
        artist: "The Beatles",
        album_name: "The White Album",
        genre: "Pop/Rock",
        price: 12,
        currency: "EUR"
      },
      {
        id: 4,
        artist: "Pink Floyd",
        album_name: "The Dark Side of the Moon",
        genre: "Pop/Rock",
        price: 13.5,
        currency: "USD"
      },
      {
        id: 5,
        artist: "Grateful Dead",
        album_name: "Aoxomoxoa",
        genre: "Pop/Rock",
        price: 16,
        currency: "USD"
      }
    ];
  }
}
