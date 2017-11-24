import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  viewMode = 'map';
  post = {
   title : 'Angular',
    isFavorite: true
  };
  favoriteChanged(isFavorite) {
    console.log('Favorite Changed', isFavorite);
  }

}
