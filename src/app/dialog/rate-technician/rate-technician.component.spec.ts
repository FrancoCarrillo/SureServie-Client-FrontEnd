import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateTechnicianComponent } from './rate-technician.component';

describe('RateTechnicianComponent', () => {
  let component: RateTechnicianComponent;
  let fixture: ComponentFixture<RateTechnicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateTechnicianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
