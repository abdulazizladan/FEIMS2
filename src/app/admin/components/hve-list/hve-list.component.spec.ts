import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HveListComponent } from './hve-list.component';

describe('HveListComponent', () => {
  let component: HveListComponent;
  let fixture: ComponentFixture<HveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HveListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
