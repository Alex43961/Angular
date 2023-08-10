import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.css']
})
export class SVGComponent {
height = "600";
width = "600";
fill = "orange";
fontSize = "30";
stroke = "green";
circleRadius = 40;
onMouseWheel(event: WheelEvent) {
  this.circleRadius += event.deltaY > 0 ? -2 : 2;
  if (this.circleRadius < 5) this.circleRadius = 5;
}
}
