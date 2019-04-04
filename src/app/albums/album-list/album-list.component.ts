import { Component, OnInit } from '@angular/core';

import { Album } from '../album.model';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  albums: Album[];
  selectedAlbum: Album = null;

  constructor() { }

  // Method will allow select and deselect
  getSelectedAlbum(album: Album) {
    if (this.selectedAlbum == album)
        this.selectedAlbum = null;
    else
        this.selectedAlbum = album;
  }

  ngOnInit() {
    this.albums = [
      {
        id: 1,
        artist: "Tremonti",
        album_name: "Dust",
        year: 2016,
        genre: "Pop/Rock",
        price: 11.99,
        currency: "USD",
        on_sale: true,
      },
      {
        id: 2,
        artist: "Bon Jovi",
        album_name: "7800 Fahrerenheit",
        year: 1985,
        genre: "Pop/Rock",
        price: 7,
        currency: "USD",
        on_sale: false,
      },
      {
        id: 3,
        artist: "The Beatles",
        album_name: "The White Album",
        year: 1968,
        genre: "Pop/Rock",
        price: 12,
        currency: "USD",
        on_sale: true,
      },
      {
        id: 4,
        artist: "Pink Floyd",
        album_name: "The Dark Side of the Moon",
        year: 1973,
        genre: "Pop/Rock",
        price: 13.5,
        currency: "USD",
        on_sale: false,
      },
      {
        id: 5,
        artist: "Grateful Dead",
        album_name: "Aoxomoxoa",
        year: 1969,
        genre: "Pop/Rock",
        price: 16.24,
        currency: "USD",
        on_sale: true,
      }
    ];
  }
}
