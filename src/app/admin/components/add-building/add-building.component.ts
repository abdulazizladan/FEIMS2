import { Component, OnInit, OnDestroy } from '@angular/core';
import { BuildingService } from '../../services/building.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-building',
  templateUrl: './add-building.component.html',
  styleUrls: ['./add-building.component.scss']
})
export class AddBuildingComponent implements OnInit {

  //private addBuildingForm: FormGroup;
  public firstFormGroup: FormGroup;//Building Survey
  public secondFormGroup: FormGroup;//Building Dimensions
  public thirdFormGroup: FormGroup;//Walls and Floors
  //public fourthFormGroup: FormGroup;//
  public fifthFormGroup: FormGroup;//Roof & Ceiling
  public sixthFormGroup: FormGroup;//Doors & Windows
  public seventhFormGroup: FormGroup;//Facilities
  public eighthFormGroup: FormGroup;//Structure
  public ninthFormGroup: FormGroup;//Elevators
  public tenthFormGroup: FormGroup;//Services

  expansionPanel1Step: number = 0;
  expansionPanel2Step: number = 0;
  expansionPanel3Step: number = 0;

  setPanel1Step( index: number){
    this.expansionPanel1Step = index;
  }

  nextStep(){
    this.expansionPanel1Step++; 
  }

  prevStep(){
    this.expansionPanel1Step--; 
  }

  resetForm(){

  }

  constructor( private buildingService: BuildingService, private fb: FormBuilder) { 
    
  }

  ngOnInit(): void{
    // 01 Building survey
    this.firstFormGroup = this.fb.group({
      facilityType: ['', [Validators.required]],
      facilityName: ['', [Validators.required]],
      facilityCode: ['', [Validators.required]],
      facilityDescription: ['', [Validators.required]],
      facilityStructure: ['', [Validators.required]],
      facilityPurpose: ['', [Validators.required]],
      numberOfStoreys: [0, [Validators.required]],
      facilityStatus: ['good', [Validators.required]],
      facilityDateBuilt: ['', [Validators.required]],
      facilityDatePurchased: ['', [Validators.required]],
      facilityLongitude: [0, [Validators.required]],
      facilityLatitude: [0, [Validators.required]],
      structureType: ['', [Validators.required]],
      yearLastDecorated: [0, [Validators.required]],
    })
    // 02 Building Dimensions
    this.secondFormGroup = this.fb.group({
      buildingFloorArea: [0, [Validators.required]],
      buildingHeadroom: [0, [Validators.required]],
      numberOfFloors: [0, [Validators.required]],
      superStructure: ['', [Validators.required]],
      floorStructure: ['', [Validators.required]],
      floorCovering: ['', [Validators.required]],
      windows: ['', [Validators.required]]
    })
    // 03 Walls and Floors
    this.thirdFormGroup = this.fb.group({
      partitionsMaterial: ['', [Validators.required]],
      partitionsFinishes: ['', [Validators.required]],
      partitionsCondition: ['good', [Validators.required]],
      partitionsRepairCost: [0, [Validators.required]],
      exteriorWall: ['', [Validators.required]],
      paintCondition: ['good', [Validators.required]],
      foundationMaterial: ['', [Validators.required]],
      foundationFinishes: ['', [Validators.required]],
      foundationCondition: ['good', [Validators.required]],
      foundationRepairCost: [0, [Validators.required]],
      floorSlabsMaterial: ['', [Validators.required]],
      floorSlabsFinishes: ['', [Validators.required]],
      floorSlabsCondition: ['good', [Validators.required]],
      floorSlabsRepairCost: [0, [Validators.required]],
      floorJointsMaterials: ['', [Validators.required]],
      floorJointsFinishes: ['', [Validators.required]],
      floorJointsCondition: ['good', [Validators.required]],
      floorJointsRepairCost: [0, [Validators.required]],
      mortarCondition: ['good', [Validators.required]],
    })
    // 05 Roof & Ceiling
    this.fifthFormGroup = this.fb.group({
      roofStyleShape: ['', [Validators.required]],
      roofTrussType: ['', []],
      roofDeckingMaterial: ['wood', []],
      roofOpeningsCondition: ['working', [Validators.required]],
      roofOpeningsRepairCost: [0, [Validators.required]],
      ceilingMaterial: ['', [Validators.required]],
      ceilingFinishes: ['', [Validators.required]],
      ceilingCondition: ['good', [Validators.required]],
      ceilingRepairCost: [0, [Validators.required]]
    })
    // 06 Doors & Windows
    this.sixthFormGroup = this.fb.group({
      doorsMaterial: ['', [Validators.required]],
      doorsFinishes: ['', [Validators.required]],
      doorsCondition: ['good', [Validators.required]],
      doorsRepairCost: [0, [Validators.required]],
      buildingWindowsMaterial: ['', [Validators.required]],
      buildingWindowsFinishes: ['', [Validators.required]],
      buildingWindowsCondition: ['good', [Validators.required]],
      buildingWindowsRepairCost: [0, [Validators.required]],
      glazingMaterial: ['', []],
      glazingFinishes: ['', []],
      glazingCondition: ['good', []],
      glazingRepairCost: [0, []],
      burglarProofCondition: ['good', []],
      burglarProofRepairCost: [0, []],
      gatesCondition: ['none', []],
      gatesRepairCost: [0, []]
    })
    // 07 Facilities
    this.seventhFormGroup = this.fb.group({
      roofLightsCondition: ['good', []],
      roofLightsRepairCost: [0, []],
      fanLightMaterial: ['', [Validators.required]],
      fanLightFinishes: ['', [Validators.required]],
      fanLightCondition: ['good', [Validators.required]],
      fanLightRepairCost: [0, [Validators.required]],
      airQualityCondition: ['good', []],
      airQualityRepairCost: [0, []],
      ventilationSystemCondition: ['good', []],
      ventilationSystemRepairCost: [0, []],
      airConditioningCondition: ['good', []],
      airConditioningRepairCost: [0, []],
      furnitureMaterial: ['', [Validators.required]],
      furnitureFinishes: ['', [Validators.required]],
      furnitureCondition: ['good', [Validators.required]],
      furnitureRepairCost: ['', []],  
      materialHandlingSystemCondition: ['good', []],
      materialHandlingSystemRepairCost: [0, []],
      temperatureControlCondition: ['good', []],
      temperatureControlRepairCost: [0, []],
      hotWaterCondition: ['good', []],
      hotWaterRepairCost: [0, []],      
      coldWaterCondition: ['good', []],
      coldWaterRepairCost: [0, []],
      gasTanksCondition: ['good', []],
      gasTanksRepairCost: [0, []],
      gasPipingCondition: ['good', []],
      gasPipingRepairCost: [0, []],
      compressedAirCondition: ['good', []],
      compressedAirRepairCost: [0,[]],  
    })
    // 08 Structure
    this.eighthFormGroup = this.fb.group({
      trimMaterial: ['', [Validators.required]],
      trimFinishes: ['', [Validators.required]],
      trimCondition: ['good', [Validators.required]],
      trimRepairCost: [0, [Validators.required]],
      frameMaterial: ['', [Validators.required]],
      frameFinishes: ['', [Validators.required]],
      frameCondition: ['good', [Validators.required]],
      frameRepairCost: [0, [Validators.required]],
      buildingFacadeMaterial: ['', [Validators.required]],
      buildingFacadeFinishes: ['', [Validators.required]],
      buildingFacadeCondition: ['good', [Validators.required]],
      buildingFacadeRepairCost: [0, [Validators.required]],
      corridorsMaterial: ['', [Validators.required]],
      corridorsFinishes: ['', [Validators.required]],
      corridorsCondition: ['good', [Validators.required]],
      corridorsRepairCost: [0, [Validators.required]],
      entrancesMaterial: ['', [Validators.required]],
      entrancesFinishes: ['', [Validators.required]],
      entrancesCondition: ['good', [Validators.required]],
      entrancesRepairCost: [0, [Validators.required]]
    })
    // 09 Elevator
    this.ninthFormGroup = this.fb.group({
      elevatorsCount: [0, []],
      elevatorType: ['', []],
      elevatorKeyLocation: ['', []],
      elevatorBrandName: ['', []],
      elevatorServiceCompany: ['', []],
      elevatorServicePhoneNumber: ['', []],
      elevatorEmergencyShutoffLocation: ['', []],
      elevatorExit: ['', []]
    })
    // 10 Services
    this.tenthFormGroup = this.fb.group({
      serviceDuctMaterial: ['', [Validators.required]],
      serviceDuctFinishes: ['', [Validators.required]],
      serviceDuctCondition: ['good', [Validators.required]],
      serviceDuctRepairCost: [0, [Validators.required]],
      drainageCondition: ['good', []],
      drainageRepairCost: [0, []],  
      distributionCondition: ['', []],
      distributionRepairCost: [0, []]
    })

    console.log(this.thirdFormGroup)
  }

  ngOnDestroy(){

  }

  addBuilding(){
    //this.buildingService.addBuilding(this.firstFormGroup.value).subscribe(
    // res=>{
    //    console.log("Adding building")
    //  },err=>{
    //    console.log("Unable to add building")
    //  }

    //)
  }

}