import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLveComponent } from './add-lve.component';

describe('AddLveComponent', () => {
  let component: AddLveComponent;
  let fixture: ComponentFixture<AddLveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
