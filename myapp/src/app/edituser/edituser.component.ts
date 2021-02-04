import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  message:string;
update;
isAvailable:boolean;
id:number
name:string
department:string
dateofjoining:Date
email:string
phone:number   
address:string
  hitCancel: boolean;
constructor(private activatedRoute: ActivatedRoute, private userservice: UserserviceService,private router:Router) {
  this.activatedRoute.queryParams.subscribe(data => {
    console.log('Data To be Updated', data);
    this.update = data;
    this.isAvailable = data.isAvailable;

  });
}

ngOnInit(): void {
this.id = this.update.id;
this.name = this.update.name;
this.department = this.update.department;
this.dateofjoining = this.update.dateofjoining;
this.email = this.update.email;
this.phone = this.update.phone;
this.address = this.update.address;
}

cancel()
    {
       this.hitCancel=true;
    }

postUpdate(form :NgForm){
  console.log("******************************************************");
  this.userservice.editUser(form.value).subscribe(response => {
  console.log(response);
  if (!response.error) {
    this.message = "Data Updated successfully";
    this.router.navigateByUrl('/userlist');
    
  }
 }, error => {
    console.log(error);
  });

}
}
