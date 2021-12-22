import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
@Output() likeComment: EventEmitter<any> = new EventEmitter<any>()
  likes = '100'
  constructor() { }

  ngOnInit(): void {
  }
submit(){
  this.likeComment.emit(this.likes);
}
}
