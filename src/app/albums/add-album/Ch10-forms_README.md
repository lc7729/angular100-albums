#### Generate component and add accessibility
- Create a component for adding albums
```console
$ ng g component albums/add-album
```

- Add router link to Nav (app.component.html)
```html
<a class="nav-item nav-link" routerLink="/add-album" routerLinkActive="active">Add Album</a>
```

- Update Routes (app-routing.module.ts):
```typescript
const routes: Routes = [
  ...
  { path: "add-album", component: AddAlbumComponent }
];
```

#### Create form and add functionality to save album data
- Add method in AlbumService to POST data

```typescript
addAlbum(album: Album): Observable<Album> {
  return this.http.post<Album>(this.url, album);
}
```

- Build form in add-album component html
- Add method in add-album component to add data
  - Since Album is an interface initialize an object in ngOnInit

```html
<button class="btn btn-primary float-right" routerLink="/details">See Details</button>
```

#### Extra:

- Add method in AlbumService to DELETE data

```typescript
removeAlbum(id: number): Observable<Album> {
  return this.http.delete<Album>(this.url + "/" + id);
}
```

- Add functionality/button to album details to remove album

#### Extra Extra:
When testing I put an img url in for 'url,' to show this in the list and card details I updated the html to the following

```html
<img *ngIf="album.id < 16" class="card-img-top cover"
  src="assets/img/{{ album.id }}.jpg" alt="{{ album.album_name }}"
  style="border: 1px solid grey" />
<img *ngIf="album.id >= 16" class="card-img-top cover"
  src="{{ album.url }}" alt="{{ album.album_name }}"
  style="border: 1px solid grey" />
```