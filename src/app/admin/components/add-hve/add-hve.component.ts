import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LVE } from 'app/admin/models/lve.model';

@Component({
  selector: 'app-add-hve',
  templateUrl: './add-hve.component.html',
  styleUrls: ['./add-hve.component.scss']
})
export class AddHveComponent implements OnInit {

  public hveForm: FormGroup;
  appearance: string = 'fill';

  /**
   * 
   */
  constructor( private fb: FormBuilder) { }

  /**
   * 
   */
  ngOnInit(): void {
    this.initializeForm();
  }

  /**
   * 
   */
  initializeForm() {
    this.hveForm = this.fb.group({
      name: ['', [Validators.required]],
      code: [''],
      serialNumber: [''],
      hasManual: [false, [Validators.required]],
      manufacturer: [''],
      commissionDate: [0],
      model: [''],
      dateManufactured: [0],
      dateAcquired: [0],
      position: this.fb.group({
        longitude: [0],
        latitude: [0]
      }),
      specifications: this.fb.array([
        {
          parameter: ['', [Validators.required]],
          value: [0, [Validators.required]]
        }
      ]),
      hasCircuitDiagram: [false, [Validators.required]],
      condition: ['', [Validators.required]],
      damage: [0, [Validators.required]],
      costOfRepair: [0, [Validators.required]],
      components: this.fb.array([
        {
          name: ['', [Validators.required]],
          description: ['', [Validators.required]],
          quantity: [0, [Validators.required]]
        }
      ])
    })  
  }

  submit() {
    console.log(this.hveForm.value)
  }

  get specifications(): FormArray {
    return this.hveForm.get('specifications') as FormArray;
  }

  get components(): FormArray {
    return this.hveForm.get('components') as FormArray;
  }

  addSpecification() {
    this.specifications.push(this.fb.group({
      parameter: ['', [Validators.required]],
      value: [0, [Validators.required]]
    }))
  }

  addComponent() {
    this.components.push(this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      quantity: [0, [Validators.required]]
    }))
  }

  removeSpecification(index: number): void{
    this.specifications.removeAt(index)
  }

  removeComponent(index: number): void{
    this.components.removeAt(index)
  }
}
