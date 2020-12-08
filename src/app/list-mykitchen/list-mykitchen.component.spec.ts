import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMykitchenComponent } from './list-mykitchen.component';

describe('ListMykitchenComponent', () => {
  let component: ListMykitchenComponent;
  let fixture: ComponentFixture<ListMykitchenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMykitchenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMykitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
