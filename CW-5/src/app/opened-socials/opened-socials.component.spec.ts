import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenedSocialsComponent } from './opened-socials.component';

describe('OpenedSocialsComponent', () => {
  let component: OpenedSocialsComponent;
  let fixture: ComponentFixture<OpenedSocialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenedSocialsComponent]
    });
    fixture = TestBed.createComponent(OpenedSocialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
