import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMykitchenComponent } from './edit-mykitchen.component';

describe('EditMykitchenComponent', () => {
  let component: EditMykitchenComponent;
  let fixture: ComponentFixture<EditMykitchenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMykitchenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMykitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
