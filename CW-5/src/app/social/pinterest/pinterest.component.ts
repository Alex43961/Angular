import { Component } from '@angular/core';

@Component({
  selector: 'app-pinterest',
  templateUrl: './pinterest.component.html',
  styleUrls: ['./pinterest.component.css']
})
export class PinterestComponent {
height = 50;
width = 50;
counter = 0;

numberClick(){
this.counter +=1;
}
}
