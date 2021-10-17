import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRegListComponent } from './event-reg-list.component';

describe('EventRegListComponent', () => {
  let component: EventRegListComponent;
  let fixture: ComponentFixture<EventRegListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventRegListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventRegListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
