import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  message: string;
  password;
  confirmpwd;
  constructor(private router: Router, private userservice: UserserviceService) { }

  ngOnInit(): void {
  }

  regUser(regObj) {
    ("************************")
    console.log(regObj);
    this.userservice.registerUser(regObj).subscribe((response) => {

      if (!response.error) {
        if(this.password.equals(this.confirmpwd))
        this.message = "User added successfully";
        this.router.navigateByUrl('/');
      }
    }, error => {
      console.log(error)
    });
  }
}
