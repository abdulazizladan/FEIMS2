import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SiteService } from '../../services/site.service'

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.scss']
})
export class AddSiteComponent implements OnInit {

  expansionPanelStep: number = 0;

  public firstFormGroup: FormGroup;//Site Survey
  public secondFormGroup: FormGroup;//Gate
  public thirdFormGroup: FormGroup;//Fence
  public fourthFormGroup: FormGroup;//Roads
  public fifthFormGroup: FormGroup;//Paths & Pavements
  public sixthFormGroup: FormGroup;//Driveway
  public seventhFormGroup: FormGroup;//Drainage
  public eighthFormGroup: FormGroup;//Electricity
  public ninthFormGroup: FormGroup;//Water
  public tenthFormGroup: FormGroup;//Others

  constructor( private siteService: SiteService, private fb: FormBuilder) { }

  ngOnInit(): void {
    //
    this.firstFormGroup = this.fb.group({

    })
    
    //
    this.secondFormGroup = this.fb.group({

    })

    //
    this.thirdFormGroup = this.fb.group({

    })

    //
    this.fourthFormGroup = this.fb.group({

    })

    //
    this.fifthFormGroup = this.fb.group({

    })

    //
    this.sixthFormGroup = this.fb.group({

    })

    //
    this.seventhFormGroup = this.fb.group({

    })

    //
    this.eighthFormGroup = this.fb.group({

    })

    //
    this.ninthFormGroup = this.fb.group({

    })

    //
    this.tenthFormGroup = this.fb.group({
      steps: this.fb.group({

      }),
      gas_tanks: this.fb.group({

      }),
      ramps: this.fb.group({

      }),
      street_lights: this.fb.group({

      }),
      waste_site: this.fb.group({
        
      })
    })
  }

  setPanelStep( index: number) {
    this.expansionPanelStep = index;
  }

  prevStep() {
    this.expansionPanelStep--;
  }

  nextStep() {
    this.expansionPanelStep++;
  }

  addSite() {

  }

  resetForm() {
    
  }

}
