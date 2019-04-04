import { Component, OnInit } from "@angular/core";
import { Album } from "../album.model";
import { ALBUMS } from '../albums.data';

@Component({
  selector: "app-album-card",
  templateUrl: "./album-card.component.html",
  styleUrls: ["./album-card.component.css"]
})
export class AlbumCardComponent implements OnInit {
  album: Album;

  constructor() {}

  ngOnInit() {
    this.album = ALBUMS[0];
  }
}
