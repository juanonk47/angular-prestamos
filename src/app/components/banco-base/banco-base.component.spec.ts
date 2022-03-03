import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BancoBaseComponent } from './banco-base.component';

describe('BancoBaseComponent', () => {
  let component: BancoBaseComponent;
  let fixture: ComponentFixture<BancoBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BancoBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BancoBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
