import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveFilmComponent } from './remove-film.component';

describe('RemoveFilmComponent', () => {
  let component: RemoveFilmComponent;
  let fixture: ComponentFixture<RemoveFilmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveFilmComponent]
    });
    fixture = TestBed.createComponent(RemoveFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
