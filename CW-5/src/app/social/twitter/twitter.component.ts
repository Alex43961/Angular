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

numberClick(){
this.counter +=1;
}
}
