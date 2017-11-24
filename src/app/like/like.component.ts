import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent  {
  @Input() isLiked = false;
  @Input('like-count') likeCount;
  constructor() { }
  likeClicked() {
    this.likeCount += this.isLiked ? -1 : 1;
    this.isLiked = !this.isLiked;
  }
}
