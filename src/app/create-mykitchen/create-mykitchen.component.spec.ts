import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMykitchenComponent } from './create-mykitchen.component';

describe('CreateMykitchenComponent', () => {
  let component: CreateMykitchenComponent;
  let fixture: ComponentFixture<CreateMykitchenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMykitchenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMykitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
