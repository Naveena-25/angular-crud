
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users: User[] = [];
  search:string; 
  message;
  constructor(private router:Router,private userService:UserserviceService) {
    this.getUsers();
   }

  ngOnInit() {
   //this.getUsers();
  }
  getUsers() {
    this.userService.getAllUsers().subscribe((response) => {
      console.log(response)
      this.users = response;
    },
      (error) => {
        console.log("Unable to fetch the data");
      }
    )
  }
  delete(user) {
    this.userService.deleteUser(user).subscribe((response) => {
      console.log(response)
      if (response.error) {
        this.message = "Cannot delete";
      } else {
        this.message ="user deleted successsfully";
      }
      setTimeout(() => {
        this.message = null;
      }, 5000);

     
      this.getUsers();
    },
      (error) => {
        console.log("errorrr");
      }
    )
  }
  postUpdate(user) {
    this.router.navigate(['/edituser'], { queryParams: user });
  }
}
