import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypayFormComponent } from './paypay-form.component';

describe('PaypayFormComponent', () => {
  let component: PaypayFormComponent;
  let fixture: ComponentFixture<PaypayFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaypayFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaypayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
