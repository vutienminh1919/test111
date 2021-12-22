import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Output() commentPost: EventEmitter<any> = new EventEmitter<any>();

  comment = {
    name: '',
    content: ''
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  submit() {
    this.commentPost.emit(this.comment)
  }

}
