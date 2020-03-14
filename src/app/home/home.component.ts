import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import { Post } from '../insterfaces/post';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private postService : PostService) {

   }

  myPosts : Post;

  ngOnInit() {
    this.postService.getPosts().subscribe((data : Post)=>
    {
          console.log(data.slice(0,10));
    })
  }

}