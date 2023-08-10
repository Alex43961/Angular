import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedSocialComponent } from './closed-social.component';

describe('ClosedSocialComponent', () => {
  let component: ClosedSocialComponent;
  let fixture: ComponentFixture<ClosedSocialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClosedSocialComponent]
    });
    fixture = TestBed.createComponent(ClosedSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
