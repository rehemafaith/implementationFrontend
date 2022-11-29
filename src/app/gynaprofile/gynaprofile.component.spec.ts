import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GynaprofileComponent } from './gynaprofile.component';

describe('GynaprofileComponent', () => {
  let component: GynaprofileComponent;
  let fixture: ComponentFixture<GynaprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GynaprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GynaprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
