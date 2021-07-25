import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LVE } from 'app/admin/models/lve.model';

@Component({
  selector: 'app-add-lve',
  templateUrl: './add-lve.component.html',
  styleUrls: ['./add-lve.component.scss']
})
export class AddLveComponent implements OnInit {

  public lveForm: FormGroup;

  /**
   * 
   */
  constructor( private fb: FormBuilder ) { }

  /**
   * 
   */
  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.lveForm = this.fb.group({
      name: ['', [Validators.required]],
      code: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      serialNumber: [0, [Validators.required]],
      dateCommissioned: ['', [Validators.required]],
      brand: ['generic', [Validators.required]], //generic as default
      model: ['', []],
      status: ['', [Validators.required]],
      costOfRepair: [0, [Validators.required]],
      comment: ['', []]
    })
  }

  /**
   * 
   */
  submit(): void{
    const formData = this.lveForm.value;
  }

}
