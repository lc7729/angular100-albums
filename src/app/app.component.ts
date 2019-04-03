import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from "@angular/core";

import { Album } from "./albums/album.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  // Un-comment to prevent UI from updating
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = "my-angular-albums";
  albumsArray: Album[];
  numbers: number[];

  titleCounter = 1;

  // constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.albumsArray = [
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
      }
    ];
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
