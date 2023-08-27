import { Component } from '@angular/core';
import { User } from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: User[] = [];
  name:string = "";
  email:string = "";
  numberPhone: string = "";
  password: string = "";

submit(myForm: User) {
  let list:string = "";
  this.users.push(myForm);
  localStorage["list"] = JSON.stringify(this.users);
  // myForm.resetForm();

}
}
