import { Component, OnInit } from '@angular/core';
import { EquipmentService } from 'app/admin/services/equipment.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquipmentState } from 'app/store/equipments/equipment.state';
import { Store } from '@ngrx/store';
import { LVE } from 'app/admin/models/lve.model';
import { MatDialogRef } from '@angular/material/dialog';
import { addLVEquipment } from 'app/store/equipments/equipment.actions';

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
    const data = this.lveForm.value;
    try{
      this.store.dispatch(addLVEquipment({equipment: data}))
      setTimeout(
        () => {
          this.dialogRef.close()
        },
        5000
      )
    }catch(error: any){

    }
  }

}
