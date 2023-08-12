import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.css']
})
export class SVGComponent {
  height = "500";
  width = "500";
  fill = "orange";
  fontSize = "30";
  stroke = "green";
  circleRadius = 100;
  isTransparent: boolean = false;
  rectangleFill = "aliceblue";
  opacityCounter = 0;
  backgroundCounter = 0;



  onMouseWheel(event: WheelEvent) {
    this.circleRadius += event.deltaY > 0 ? -10 : 10;
    if (this.circleRadius < 5) {
      this.circleRadius = 5;
    } else if (this.circleRadius > 250) {
      this.circleRadius = 250;
    }
  }
  toggleOpacity() {
    this.opacityCounter += 1;
    this.isTransparent = !this.isTransparent;
  }

  randomBackground() {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;

    this.rectangleFill = randomColor;
  }
  changeBackground(event: any) {
    this.backgroundCounter += 1;

  }

}
