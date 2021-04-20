import { Component, OnInit } from '@angular/core';

interface siteSurveyData{
  institutionName: string;
  campusLocation: string;
  responsibilityCentre: string;
  department: string;
  siteId: string;
  overallSiteMeasurement: number;
  siteTriangulation: number;
  siteLevel: number;
  
}

@Component({
  selector: 'app-site-survey',
  templateUrl: './site-survey.component.html',
  styleUrls: ['./site-survey.component.scss']
})
export class SiteSurveyComponent implements OnInit {

  constructor( ) { 

  }

  ngOnInit(): void {

  }

  addSiteData(): boolean {
    return true;
  }

}
