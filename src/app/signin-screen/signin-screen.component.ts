import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormControl } from '@angular/forms';
@Component({
  selector: 'app-signin-screen',
  templateUrl: './signin-screen.component.html',
  styleUrls: ['./signin-screen.component.css']
})
export class SigninScreenComponent implements OnInit {

  

  constructor(private fb: FormBuilder) { }

  userForm = this.fb.group({

      userEmail : '',
      userPassword : ''

  })

  ngOnInit() {
  }


  updateValues()
  {
      // this.userForm.setValue({
      //     userEmail : 'surendra',
      //     userPassword : 'surendra'
      // })
  }

  onSubmit(){

      console.warn(this.userForm.value);

  }

}