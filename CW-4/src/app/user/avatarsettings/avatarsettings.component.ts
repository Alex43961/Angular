import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-avatarsettings',
  templateUrl: './avatarsettings.component.html',
  styleUrls: ['./avatarsettings.component.css']
})
export class AvatarsettingsComponent {
  @Input() width: number | undefined;
  @Input() height: number | undefined;

  @Output() heightChange = new EventEmitter<number>();
  @Output() widthChange = new EventEmitter<number>();

  onWidthInput() {
    this.widthChange.emit(this.width);
  }

  onHeightInput() {    
    this.heightChange.emit(this.height);
  }
}
