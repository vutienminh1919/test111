import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  postForm : FormGroup|any;
   posts = [
    {
      title: 'nhat ky ngay 19/12',
      date: '2021-12-19',
      description: 'nhat ky dgkdgddddddddddddgdddddddddddd',
      comments: [
        {
          name: 'Minh',
          content: 'bai viet rat ok'
        },
        {
          name: 'Luan',
          content: 'bai viet rat hay'
        }
      ],
      likes: 100
    },
    {
      title: 'nhat ky ngay 20/12',
      date: '2021-12-20',
      description: 'nhat ky dgkdgddddddddddddgdddddddddddd',
      comments: [
        {
          name: 'Cuong',
          content: 'bai viet rat tuyet'
        },
        {
          name: 'Xuan Anh',
          content: 'bai viet hay'
        }
      ],
      likes : 200
    },
    {
      title: 'nhat ky ngay 21/12',
      date: '2021-12-21',
      description: 'nhat ky dgkdgddddddddddddgdddddddddddd',
      comments: [
        {
          name: 'Duc',
          content: 'bai viet duoc'
        },
        {
          name: 'Thanh',
          content: 'bai viet khong hay'
        }
      ],
      likes : 150
    }
  ];
  ngOnInit() {
    this.postForm = new FormGroup({
      title: new FormControl('',[Validators.required,Validators.minLength(4)]),
      description: new FormControl('',[Validators.required])
    })
  }

  indexPostHide = -1;
  showBoxCommentPost(index:number){
    this.indexPostHide = index;
  }
  addComment(event:any){
    this.posts[this.indexPostHide].comments.push(event)
    this.indexPostHide = -1
  }
  submit(){
    let today  = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let post = this.postForm?.value;
    post.date = date
    post.user = 'Minh';
    post.likes = 0;
    post.comments = [];
    this.posts.push(post);
    // console.log(this.postForm.value)
  }
  get titlePost(){
    return this.postForm.get('title')
  }
  get descriptionPost(){
    return this.postForm.get('description')
  }


}
