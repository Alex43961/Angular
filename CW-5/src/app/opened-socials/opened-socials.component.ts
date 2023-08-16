import { Component, ViewChild } from '@angular/core';
import { LinkedInComponent } from '../social/linked-in/linked-in.component';
import { TwitterComponent } from '../social/twitter/twitter.component';

@Component({
  selector: 'app-opened-socials',
  templateUrl: './opened-socials.component.html',
  styleUrls: ['./opened-socials.component.css']
})
export class OpenedSocialsComponent {
  sumClicks = 0;

  @ViewChild(LinkedInComponent) linkedInComponent!: LinkedInComponent;
  @ViewChild(TwitterComponent) twitterComponent!: TwitterComponent;


  increase() {
    this.sumClicks += 1;
  }

  sumDecrease() {
    this.sumClicks -= 2;
    this.linkedInComponent.decrement();
    this.twitterComponent.decrement();
  }
}
