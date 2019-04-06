import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnInit
} from "@angular/core";

import { Album } from "./albums/album.model";
import { ALBUMS } from "./albums/albums.data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
  // Un-comment to prevent UI from updating
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = "My Angular Albums";
  albumsArray: Album[];
  numbers: number[];

  titleCounter = 1;

  constructor() {}

  ngOnInit(): void {
    this.albumsArray = ALBUMS;

    console.log(JSON.stringify(this.albumsArray));

    const intervalId = setInterval(() => {
      this.titleCounter++;

      this.albumsArray[0].price = this.albumsArray[0].price + 10;

      console.log(this.numbers);

      this.albumsArray.forEach(album => (album.price += 10));
    }, 2000);

    setTimeout(() => {
      clearInterval(intervalId);
    }, 6000);
  }
}
