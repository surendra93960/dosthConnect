import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl } from '@angular/forms';
import { User } from '../insterfaces/User';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-signup-screen',
  templateUrl: './signup-screen.component.html',
  styleUrls: ['./signup-screen.component.css']
})
export class SignupScreenComponent implements OnInit {

  constructor(private fb : FormBuilder ,private auth : AuthService) { }

  new_user : User;

  userSignupForm = this.fb.group({
      userName : [''],
      userEmail : [''],
      userPassword : ['']
  })

  ngOnInit() {

  }

  onSubmit(){
      this.new_user = this.userSignupForm.value;
      this.auth.registerUser(this.new_user).subscribe(res =>{
        console.log('ganesh',res);
        

      } );
  }

}