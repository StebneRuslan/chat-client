import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewChatFooterComponent } from './new-chat-footer.component';

describe('NewChatFooterComponent', () => {
  let component: NewChatFooterComponent;
  let fixture: ComponentFixture<NewChatFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewChatFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewChatFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
