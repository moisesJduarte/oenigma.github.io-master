import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BePartUsModalComponent } from './be-part-us-modal.component';

describe('BePartUsModalComponent', () => {
  let component: BePartUsModalComponent;
  let fixture: ComponentFixture<BePartUsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BePartUsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BePartUsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
