import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHveComponent } from './add-hve.component';

describe('AddHveComponent', () => {
  let component: AddHveComponent;
  let fixture: ComponentFixture<AddHveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
