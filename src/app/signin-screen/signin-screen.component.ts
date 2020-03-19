import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from '../insterfaces/User';
import { Router,ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
@Component({
  selector: 'app-signin-screen',
  templateUrl: './signin-screen.component.html',
  styleUrls: ['./signin-screen.component.css']
})
export class SigninScreenComponent implements OnInit {

  

  constructor(private fb: FormBuilder ,private router: Router,private auth : AuthService ) {

  }

  loading : boolean = false;
  errorMessage = {};
  userForm = this.fb.group({

      userEmail : '',
      userPassword : ''

  })
  user : User;

  ngOnInit() {
      this.errorMessage.success = true;
  }


  updateValues()
  {
      // this.userForm.setValue({
      //     userEmail : 'surendra',
      //     userPassword : 'surendra'
      // })
  }

  onSubmit(){
      this.loading = true;
      console.warn(this.userForm.value);
      this.user = this.userForm.value;

      this.auth.loginUser(this.user).subscribe(res =>{
          console.log('api response inside angular',res);
          if(res.success)
          {
              this.auth.isUserSignedIn = true;
              this.router.navigate(['/home']);
          }
          else{
              this.loading = false;
              this.errorMessage = res;              
              this.router.navigate(['/signin']);

          }
             
          
      })

  }

}