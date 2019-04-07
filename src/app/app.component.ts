import { Component } from "@angular/core";

import { Album } from "./albums/album.model";
import { ALBUMS } from "./albums/albums.data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "My Angular Albums";
  albumsArray: Album[];

  titleCounter = 1;

  ngOnInit(): void {
    this.albumsArray = ALBUMS;

    console.log(JSON.stringify(this.albumsArray, null, 4));

    let interval = setInterval(() => this.titleCounter++, 2000);

    setTimeout(() => clearInterval(interval), 6000);
  }
}
