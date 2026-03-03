import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComposantComponent } from './header-composant.component';

describe('HeaderComposantComponent', () => {
  let component: HeaderComposantComponent;
  let fixture: ComponentFixture<HeaderComposantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComposantComponent]
    });
    fixture = TestBed.createComponent(HeaderComposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
