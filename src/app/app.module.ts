import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SigninScreenComponent } from './signin-screen/signin-screen.component';
import { SignupScreenComponent } from './signup-screen/signup-screen.component';
import { AboutComponent } from './about/about.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostService } from './post.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';

const appRoutes : Routes = [
  { path : '' , component : HomeComponent},
  { path : 'home' , component : HomeComponent},
  { path : 'about' , component : AboutComponent},
  { path : 'signin' , component : SigninScreenComponent},
  { path : 'signup' , component : SignupScreenComponent},
] 

@NgModule({
  imports:      [ BrowserModule, FormsModule ,HttpClientModule,RouterModule.forRoot(appRoutes) ,ReactiveFormsModule ],
  declarations: [ AppComponent, NavbarComponent, HomeComponent, SigninScreenComponent, SignupScreenComponent, AboutComponent,  ],
  bootstrap:    [ AppComponent ],
  providers: [PostService, AuthService]
})
export class AppModule { }
