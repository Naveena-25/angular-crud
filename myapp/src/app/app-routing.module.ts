import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  { path: 'adduser', component: AdduserComponent },
  { path: 'userlist', component: UserlistComponent },
  { path: 'edituser', component: EdituserComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: LoginComponent,pathMatch:'full'},
  { path: 'forgotpassword', component: ForgotpasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
