import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CPrestamoComponent } from './c-prestamo.component';

describe('CPrestamoComponent', () => {
  let component: CPrestamoComponent;
  let fixture: ComponentFixture<CPrestamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CPrestamoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CPrestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
