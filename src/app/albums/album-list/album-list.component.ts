import { Component, OnInit } from '@angular/core';

import { Album } from '../album.model';
import { ALBUMS } from '../albums.data';

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
    this.albums = ALBUMS;
  }
}
