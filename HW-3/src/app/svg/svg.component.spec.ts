import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SVGComponent } from './svg.component';

describe('SVGComponent', () => {
  let component: SVGComponent;
  let fixture: ComponentFixture<SVGComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SVGComponent]
    });
    fixture = TestBed.createComponent(SVGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
