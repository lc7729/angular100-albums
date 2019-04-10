import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AlbumService } from "../album.service";
import { Album } from "../album.model";

@Component({
  selector: "app-album-details",
  templateUrl: "./album-details.component.html",
  styleUrls: ["./album-details.component.css"]
})
export class AlbumDetailsComponent implements OnInit {
  album: Album;
  new_price: number;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    this.getAlbum();
  }

  removeAlbum() {
    this.albumService.removeAlbum(this.album.id).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  getAlbum() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.albumService.getAlbumById(id).subscribe(
      album => {
        this.album = album;
        this.calculateDiscount();
      },
      error => console.log("Error: ", error)
    );
  }

  calculateDiscount() {
    // Check if the album is on sale
    if (this.album.on_sale)
      // Apply 10% discount
      this.new_price = this.album.price - this.album.price * 0.1;
  }
}
