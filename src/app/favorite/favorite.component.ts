import { Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent implements OnInit {
  @Input() isFavorite = false;
  @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onFavoriteClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit(this.isFavorite);
  }

}
