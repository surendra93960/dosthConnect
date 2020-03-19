import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import { Post } from '../insterfaces/post';
import { AuthService } from '../auth.service'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit 
{

  constructor(private postService : PostService,private auth : AuthService,private router: Router) { }

  myPosts : Post;
  loading : boolean =true;
   
  ngOnInit() {

    if(!this.auth.isUserSignedIn)
    {
        this.router.navigate(['/signin']);
        
    }else{
              this.postService.getPosts().subscribe((data : Post)=>
                  {
                        

                        this.myPosts = data.slice(0,20);

                        console.log(this.myPosts);
                        this.loading = false;
                        
                  })
            }
      }

}