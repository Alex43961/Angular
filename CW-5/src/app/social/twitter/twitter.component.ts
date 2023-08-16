import { Component } from '@angular/core';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent {
height = 50;
width = 50;
counter = 0;

decrement(){
  this.counter -=1;
}

numberClick(){
  this.height +=1;
  this.width +=1;
this.counter +=1;
}
}
