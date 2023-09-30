import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BePartUsComponent } from './be-part-us.component';

describe('BePartUsComponent', () => {
  let component: BePartUsComponent;
  let fixture: ComponentFixture<BePartUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BePartUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BePartUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
