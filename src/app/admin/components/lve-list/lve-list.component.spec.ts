import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LveListComponent } from './lve-list.component';

describe('LveListComponent', () => {
  let component: LveListComponent;
  let fixture: ComponentFixture<LveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LveListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
