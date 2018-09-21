import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverpanelComponent } from './driverpanel.component';

describe('DriverpanelComponent', () => {
  let component: DriverpanelComponent;
  let fixture: ComponentFixture<DriverpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
