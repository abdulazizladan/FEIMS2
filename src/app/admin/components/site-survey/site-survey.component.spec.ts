import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteSurveyComponent } from './site-survey.component';

describe('SiteSurveyComponent', () => {
  let component: SiteSurveyComponent;
  let fixture: ComponentFixture<SiteSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
