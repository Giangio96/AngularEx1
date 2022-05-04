import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderConteinerComponent } from './order-conteiner.component';

describe('OrderConteinerComponent', () => {
  let component: OrderConteinerComponent;
  let fixture: ComponentFixture<OrderConteinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderConteinerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderConteinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
