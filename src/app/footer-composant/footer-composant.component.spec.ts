import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComposantComponent } from './footer-composant.component';

describe('FooterComposantComponent', () => {
  let component: FooterComposantComponent;
  let fixture: ComponentFixture<FooterComposantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComposantComponent]
    });
    fixture = TestBed.createComponent(FooterComposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
