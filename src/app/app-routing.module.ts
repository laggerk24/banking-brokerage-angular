import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdduserComponent } from './adduser/adduser.component';
import { Page404Component } from './page404/page404.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { ViewuserdetailsComponent } from './viewuserdetails/viewuserdetails.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adduser', component: AdduserComponent },
  {path:'updateuser/:id',component:UpdateuserComponent},
  {path:'viewuserdetails/:id',component:ViewuserdetailsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
  {path:'**', component:Page404Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
