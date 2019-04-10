import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AlbumListComponent } from "./albums/album-list/album-list.component";
import { AlbumDetailsComponent } from "./albums/album-details/album-details.component";
import { AddAlbumComponent } from "./albums/add-album/add-album.component";

const routes: Routes = [
  { path: "", redirectTo: "/albums", pathMatch: "full" },
  { path: "albums", component: AlbumListComponent },
  { path: "details/:id", component: AlbumDetailsComponent },
  { path: "add-album", component: AddAlbumComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
