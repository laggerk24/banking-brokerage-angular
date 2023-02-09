import { Component , OnInit} from '@angular/core';
import { UserdataService } from '../services/userdata.service';
import { SignUp } from '../data-type';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  users:undefined | SignUp[];
  
  constructor(private userData:UserdataService){ }
  ngOnInit(): void {
      this.userlist()

  }
  delete(id:number){
    this.userData.deleteUser(id).subscribe((value)=>{
      if(value){
        console.log(value);
        alert("User Deleted Successfully");
        this.userlist();
      }
  });
  }
  userlist(){
    this.userData.users().subscribe((data)=>{
      console.warn("data",data);
      this.users=data
    })
  }
  

}


