import { Component } from '@angular/core';

@Component({
  selector: 'app-linked-in',
  templateUrl: './linked-in.component.html',
  styleUrls: ['./linked-in.component.css']
})
export class LinkedInComponent {
  height = 50;
  width = 50;
  counter = 0;

  decrement() {
    this.counter -=1;
  }

  numberClick() {
    this.height += 1;
    this.width += 1;
    this.counter += 1;
  }
}
