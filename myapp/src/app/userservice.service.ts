import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  url:string = "http://localhost:3000/users";
  

  constructor(private http: HttpClient) {
  }
  getAllUsers(){
    return this.http.get<User[]>(this.url);
  }
  addUser(user){
    return this.http.post<any>(this.url,user);
  }
  deleteUser(user){
    return this.http.delete<any>("http://localhost:3000/users/"+user.id);
  }
  editUser(user){
    return this.http.put<any>("http://localhost:3000/users/"+user.id,user);
  }
  registerUser(regUser){
    return this.http.post<any>("http://localhost:3000/profiles",regUser);
  }
  postLogin(userDetails) {
    return this.http.post<any>('http://localhost:3000/profiles/login', userDetails);
  }
}
