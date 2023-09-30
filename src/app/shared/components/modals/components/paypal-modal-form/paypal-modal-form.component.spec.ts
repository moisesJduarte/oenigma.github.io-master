import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypalModalFormComponent } from './paypal-modal-form.component';

describe('PaypalModalFormComponent', () => {
  let component: PaypalModalFormComponent;
  let fixture: ComponentFixture<PaypalModalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaypalModalFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaypalModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
