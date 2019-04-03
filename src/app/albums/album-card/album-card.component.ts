import { Component, OnInit } from "@angular/core";
import { Album } from "../album.model";

@Component({
  selector: "app-album-card",
  templateUrl: "./album-card.component.html",
  styleUrls: ["./album-card.component.css"]
})
export class AlbumCardComponent implements OnInit {
  album: Album;

  constructor() {}

  ngOnInit() {
    this.album = {
      id: 1,
      artist: "Tremonti",
      album_name: "Dust",
      genre: "Pop/Rock",
      price: 12,
      currency: "USD"
    };
  }
}
