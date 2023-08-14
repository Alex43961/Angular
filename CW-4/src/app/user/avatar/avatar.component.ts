import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent {
 @Input() width: number | undefined;
 @Input() height: number | undefined;
  src = "/assets/avatar.png"
}
