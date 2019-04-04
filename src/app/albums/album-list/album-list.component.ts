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

  constructor() { }

  ngOnInit() {
    this.albums = ALBUMS;
  }

}
