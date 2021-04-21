import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SiteService } from '../../services/site.service';

interface siteSurveyData{
  institutionName: string;
  campusLocation: string;
  responsibilityCentre: string;
  department: string;
  siteId: string;
  overallSiteMeasurement: number;
  siteTriangulation: number;
  siteLevel: number;
  sitePosition: {
    longitude: number;
    latitude: number
  };
  changeOfLevels: number;
  siteCondition: {
    hasErosion: boolean;
    isFlooded: boolean;
    wood2oomAboveGround: boolean;
    trees3mFromFoundation: boolean;
    hasWeedOnWalls: boolean;
    sitePlan: string;
    generalComments: string;
  } 

}

@Component({
  selector: 'app-site-survey',
  templateUrl: './site-survey.component.html',
  styleUrls: ['./site-survey.component.scss']
})
export class SiteSurveyComponent implements OnInit {

  siteSurveyForm: FormGroup;

  constructor( private siteService: SiteService, private fb: FormBuilder ) { 

  }

  ngOnInit(): void {
    this.siteSurveyForm = this.fb.group({
      institutionName: [ '', [Validators.required]],

    })
  }

  addSiteData(): boolean{
    return true;
  }

  resetForm(): void{

  }

}
