import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './insterfaces/User';

@Injectable()
export class AuthService {

  constructor(private _http : HttpClient) {
  }

  httpOptions  = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

  registerUser(new_user : User) : Observable<HttpResponse<User>> {
      console.log(new_user);
      return this._http.post<User>('/api/registerUser',new_user ,this.httpOptions);
  }

}