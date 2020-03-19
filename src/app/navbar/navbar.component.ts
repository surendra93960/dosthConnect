import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //@Input() loggedStatus : boolean;
  //isUserSignedIn

  isUserSignedIn : boolean;
  constructor(private auth : AuthService) { }

  ngOnInit() {
    if(this.auth.isUserSignedIn){
      console.log('inside navbar ',this.auth.isUserSignedIn)
        this.isUserSignedIn = this.auth.isUserSignedIn;
    }
        
    
  }

}