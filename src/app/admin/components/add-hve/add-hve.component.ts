import { Component, OnInit } from '@angular/core';
import { EquipmentService } from 'app/admin/services/equipment.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquipmentState } from 'app/store/equipments/equipment.state';
import { Store } from '@ngrx/store';
import { HVE } from 'app/admin/models/hve.model';
import { MatDialogRef } from '@angular/material/dialog';
import { addHVEquipment } from 'app/store/equipments/equipment.actions';

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
  constructor( 
    private fb: FormBuilder,
    private equipmentService: EquipmentService,
    private store: Store<{ equipment: EquipmentState}>,
    private dialogRef: MatDialogRef<any>
  ) { }

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
    const data = this.hveForm.value
    try{
      this.store.dispatch(addHVEquipment({equipment: data}))
      setTimeout(
        () => {
          this.dialogRef.close()
        },
        5000
      )
    }catch(error: any){

    }
  }

  testSubmit() {
    const data = this.hveForm.value
    console.log(data)
    this.equipmentService.addHighValueEquipment(data).subscribe(
      res => {
        console.log(res)
      },
      err => {
        console.log(err)
      }
    )
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
