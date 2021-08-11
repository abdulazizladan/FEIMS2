import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HVE } from 'app/admin/models/hve.model';

@Component({
  selector: 'app-add-hve',
  templateUrl: './add-hve.component.html',
  styleUrls: ['./add-hve.component.scss']
})
export class AddHveComponent implements OnInit {

  public hveForm: FormGroup;

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
      name: (['', [Validators.required]]),
      code: (['']),
      serialNumber:  (['']),
      hasManual: ([false, [Validators.required]]),
      manufacturer: (['']),
      commissionDate: (['', [Validators.required]]),
      model: (['']),
      dateManufactured: (['']),
      dateAcquired: (['']),
      position: this.fb.group({
        longitude: ([null]),
        latitude: ([null]),
      }),
      /*specifications: this.fb.array([

      ]),*/
      hasCircuitDiagram: (false),
      condition: ([null]),
      damage: ([0, Validators.required]),
      costOfRepair: (null),
      components: this.fb.array([

      ])
    }) 
  }

  submit() {
    const formData = this.hveForm.value
    console.log(formData)
  }

   /*get specifications(): FormArray{
    return this.HveForm.controls["specifications"] as FormArray;
  }

  addSpec(): void {
    const specification = this.fb.group({
      parameter: (['', Validators.required]),
      value: (['', Validators.required])
    })
    this.specifications.push(specification)
  }

  removeSpec( id: number): void{
    this.specifications.removeAt(id);
  }*/

  get components(): FormArray{
    return this.hveForm.controls.components as FormArray;
  }

  addComponent(): void{
    const component =this.fb.group({
      name: (['', Validators.required]),
      description: (['', Validators.required]),
      quantity: ([null, [Validators.required, Validators.min(1)]])
    })
    this.components.push(component)
  }

  removeComponent( i: number): void{
    this.components.removeAt(i);
  }
}
