import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarsettingsComponent } from './avatarsettings.component';

describe('AvatarsettingsComponent', () => {
  let component: AvatarsettingsComponent;
  let fixture: ComponentFixture<AvatarsettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarsettingsComponent]
    });
    fixture = TestBed.createComponent(AvatarsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
