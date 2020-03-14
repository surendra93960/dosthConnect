import { Injectable } from '@angular/core';
import { HttpClient ,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './insterfaces/post';
import { User } from './insterfaces/User';

@Injectable()
export class PostService {

  constructor(private _http: HttpClient) {

  }

  getPosts() : Observable<HttpResponse<Post>>
  {

     console.log('i am in getposts method inside service');
      return this._http.get<Post>('https://picsum.photos/v2/list');
  }

}