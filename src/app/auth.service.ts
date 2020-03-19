import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './insterfaces/User';

@Injectable()
export class AuthService {


  isUserSignedIn : false;

  constructor(private _http : HttpClient) {
  }

  httpOptions  = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

  registerUser(new_user : User) : Observable<HttpResponse<User>> 
  {

      console.log(new_user);
      return this._http.post<User>('https://meanapp.surendrareddyre.repl.co/api/registerUser',new_user ,this.httpOptions);

  }


  loginUser(user : User) : Observable<HttpResponse<User>>{
      console.log('inside auth  ',user)
      return this._http.post<User>('https://meanapp.surendrareddyre.repl.co/api/loginUser',user,this.httpOptions);
  }

}