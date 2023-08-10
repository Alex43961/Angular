import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  counter: number = 0;
  isBlue: boolean = false;
  color: any = "rgb(190,110,230)";


  toggleBlue() {
    this.counter += 1;
    let newColor;
    if (this.counter % 2 !== 0) {
      this.isBlue = true;
    } else {
      this.isBlue = false;
    }
    this.color = this.randomColors();
    console.log(this.color);
  }
  randomColors() {
    const randomColorsArray = function () {
      let manyColors = [];
      let count = 0;
      for (let i = 0; i < 1000; i++) {
        count++;
        let x = Math.floor(Math.random() * 250);
        let y = Math.floor(Math.random() * 250);
        let z = Math.floor(Math.random() * 250);


        let newColor = `rgb(${x}, ${y},${z})`;

        manyColors.push(newColor);
      }

      return manyColors;
    }


    function* infinityColor() {

      const endLessColor = randomColorsArray();

      for (let j = 0; j < endLessColor.length; j++) {

        yield endLessColor[j];
        if (j == endLessColor.length - 1) {
          j = 0;
        }
      }

    }
    let iterator = infinityColor();
    return iterator.next().value;
  }
}
