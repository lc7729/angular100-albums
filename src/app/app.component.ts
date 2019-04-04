import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from "@angular/core";

import { Album } from './albums/album.model';
import { ALBUMS } from './albums/albums.data';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  // Un-comment to prevent UI from updating
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'My Angular Albums';
  albumsArray: Album[];
  numbers: number[];

  titleCounter = 1;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.albumsArray = ALBUMS;
    this.numbers = [1, 2, 3];

    console.log(JSON.stringify(this.albumsArray, null, 4));

    const interval = setInterval(() => {
      this.titleCounter++;

      // Array manipulation, log results, NO UI Reflection
      this.numbers.push(Math.floor(Math.random() * 10));
      console.log(this.numbers);

      this.albumsArray.forEach((album) => album.price += 10);

      console.log(JSON.stringify(this.albumsArray, null, 4));

      // Un-comment to show changes in UI
      // this.cdr.detectChanges();
    }, 2000);

    setTimeout(() => {
      clearInterval(interval);
    }, 6000);
  }
}
