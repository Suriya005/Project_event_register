import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRegEventComponent } from './edit-reg-event.component';

describe('EditRegEventComponent', () => {
  let component: EditRegEventComponent;
  let fixture: ComponentFixture<EditRegEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRegEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRegEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
