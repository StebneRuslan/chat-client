import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatListsComponent } from './chat-lists.component';

describe('ChatListsComponent', () => {
  let component: ChatListsComponent;
  let fixture: ComponentFixture<ChatListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
