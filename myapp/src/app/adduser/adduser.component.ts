import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  message: string;
  error: string;
  hitCancel: boolean= false;

  constructor(private userservice: UserserviceService) { }

  ngOnInit(): void {
  }

  cancel()
    {
       this.hitCancel=true;
    }

  addUser(form: NgForm) {
    ("************************")
     console.log(form.value);
    this.userservice.addUser(form.value).subscribe((response) => {
      if (!response.error) {
        this.message = "User added successfully";
        form.reset();
        
      }
      setTimeout(() => {
        this.message = null;
      }, 5000);

     }, error => {
        console.log(error);
      });
    }
  }
