import { Component, OnInit, OnDestroy } from '@angular/core';
import { EquipmentService } from 'app/admin/services/equipment.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { EquipmentState } from 'app/store/equipments/equipment.state';
import { addLVEquipment } from 'app/store/equipments/equipment.actions';

@Component({
  selector: 'app-add-lve',
  templateUrl: './add-lve.component.html',
  styleUrls: ['./add-lve.component.scss']
})
export class AddLveComponent implements OnInit, OnDestroy {

  submitted: boolean = false;
  error: boolean = false;

  public lveForm: FormGroup;

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

  ngOnDestroy() {

  }

  /**
   * 
   */
  initializeForm() {
    this.lveForm = this.fb.group({
      name: ['', []],
      code: ['', []],
      quantity: ['', []],
      serialNumber: [0, []],
      dateCommissioned: ['', []],
      brand: ['generic', []], //generic as default
      model: ['', []],
      status: ['', []],
      costOfRepair: [0, []],
      comment: ['', []]
    })
  }

  /**
   * 
   */
  submit(): void{
    const data = this.lveForm.value;
    console.log(data)
    try{
      this.submitted = true;
      this.store.dispatch(addLVEquipment({equipment: data}))
      setTimeout(
        () => {
          this.dialogRef.close()
        },
        5000
      )
    }catch(error: any){
      console.log(error)
    }
  }

  testSubmit(): void {
    const data = this.lveForm.value;
    console.log(data)
    this.equipmentService.addLowValueEquipment(data).subscribe(
      res => {
        console.log(res)
      }, err => {
        console.log(err)
      }
    )
  }

}
