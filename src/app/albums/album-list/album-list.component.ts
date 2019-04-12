import { Component, OnInit } from "@angular/core";

import { Album } from "../album.model";
import { AlbumService } from "../album.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-album-list",
  templateUrl: "./album-list.component.html",
  styleUrls: ["./album-list.component.css"]
})
export class AlbumListComponent implements OnInit {
  albums: Album[];
  selectedAlbum: Album = null;

  constructor(private albumService: AlbumService) {}

  // Method will allow select and deselect
  getSelectedAlbum(album: Album) {
    if (this.selectedAlbum == album) {
      this.selectedAlbum = null;
    } else {
      this.selectedAlbum = album;
    }
  }

  getAlbums() {
    this.albumService
      .getAlbums()
      .subscribe(
        albums => (this.albums = albums),
        error => console.log("Error: ", error)
      );
  }

  ngOnInit() {
    this.getAlbums();
  }
}
