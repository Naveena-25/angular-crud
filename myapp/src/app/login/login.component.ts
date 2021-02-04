import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: any;
  ngOnInit(): void {

  }
  constructor(private userservice: UserserviceService) { }
  loginUser(form: NgForm) {
    this.userservice.postLogin(form.value).subscribe(response => {
      console.log(response);
      if (response.error) {
        this.error = response.message;
        setTimeout(() => {
          this.error = null;
        }, 5000);
      }
    })

  }
}
