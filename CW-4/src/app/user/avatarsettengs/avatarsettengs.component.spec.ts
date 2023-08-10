import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarsettengsComponent } from './avatarsettengs.component';

describe('AvatarsettengsComponent', () => {
  let component: AvatarsettengsComponent;
  let fixture: ComponentFixture<AvatarsettengsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarsettengsComponent]
    });
    fixture = TestBed.createComponent(AvatarsettengsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
