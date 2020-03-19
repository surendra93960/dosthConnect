import { Component } from '@angular/core';
import { AuthService } from './auth.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor(private auth : AuthService){}
  name = 'Angular';
  loggedIn : boolean = this.auth.isUserSignedIn;

}
