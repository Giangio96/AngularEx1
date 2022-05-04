import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConteinerComponent } from './user-conteiner.component';

describe('UserConteinerComponent', () => {
  let component: UserConteinerComponent;
  let fixture: ComponentFixture<UserConteinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserConteinerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConteinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
