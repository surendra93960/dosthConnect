import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SigninScreenComponent } from './signin-screen/signin-screen.component';
import { SignupScreenComponent } from './signup-screen/signup-screen.component';


const appRoutes : Routes = [
  { path : '' , component : HomeComponent},
  { path : 'home' , component : HomeComponent},
  { path : 'signin' , component : SigninScreenComponent},
  { path : 'signup' , component : SignupScreenComponent},
] 

@NgModule({
  imports:      [ BrowserModule, FormsModule ,RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, NavbarComponent, HomeComponent, SigninScreenComponent, SignupScreenComponent,  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
