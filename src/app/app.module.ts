import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdduserComponent } from './adduser/adduser.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { Page404Component } from './page404/page404.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { ViewuserdetailsComponent } from './viewuserdetails/viewuserdetails.component'

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    AdduserComponent,
    Page404Component,
    UpdateuserComponent,
    ViewuserdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
