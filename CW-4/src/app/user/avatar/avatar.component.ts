import { Component } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent {
width:number = 300;
height: number = 300;
src: string = "/assets/pngwing.com.png"
}
