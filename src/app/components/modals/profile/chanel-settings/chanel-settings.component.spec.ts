import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanelSettingsComponent } from './chanel-settings.component';

describe('ChanelSettingsComponent', () => {
  let component: ChanelSettingsComponent;
  let fixture: ComponentFixture<ChanelSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChanelSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChanelSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
