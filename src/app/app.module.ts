import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumListComponent } from './albums/album-list/album-list.component';
import { AlbumCardComponent } from './albums/album-card/album-card.component';
import { AlbumService } from './albums/album.service';

@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    AlbumCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
