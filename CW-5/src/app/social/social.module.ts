import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClosedSocialComponent } from './closed-social/closed-social.component';
import { TwitterComponent } from './twitter/twitter.component';
import { LinkedInComponent } from './linked-in/linked-in.component';
import { PinterestComponent } from './pinterest/pinterest.component';




@NgModule({
  declarations: [


    ClosedSocialComponent,
    TwitterComponent,
    LinkedInComponent,
    PinterestComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ClosedSocialComponent,
    TwitterComponent,
    LinkedInComponent
  ]
})
export class SocialModule { }
