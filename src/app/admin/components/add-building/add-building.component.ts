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

  expansion1Step: number = 0;

  set1Step( index: number){
    this.expansion1Step = index;
  }

  nextStep(){
    this.expansion1Step++; 
  }

  prevStep(){
    this.expansion1Step--; 
  }

  previousStep(){

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
      facilityStatus: ['', [Validators.required]],
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
      partitionsCondition: ['', [Validators.required]],
      partitionsRepairCost: [0, [Validators.required]],
      exteriorWall: ['', [Validators.required]],
      paintCondition: ['', [Validators.required]],
      foundationMaterial: ['', [Validators.required]],
      foundationFinishes: ['', [Validators.required]],
      foundationCondition: ['', [Validators.required]],
      foundationRepairCost: [0, [Validators.required]],
      floorSlabsMaterial: ['', [Validators.required]],
      floorSlabsFinishes: ['', [Validators.required]],
      floorSlabsCondition: ['', [Validators.required]],
      floorSlabsRepairCost: [0, [Validators.required]],
      floorJointsMaterials: ['', [Validators.required]],
      floorJointsFinishes: ['', [Validators.required]],
      floorJointsCondition: ['', [Validators.required]],
      floorJointsRepairCost: [0, [Validators.required]],
      mortarCondition: ['', [Validators.required]],
    })
    // 05 Roof & Ceiling
    this.fifthFormGroup = this.fb.group({
      roofStyleShape: ['', [Validators.required]],
      roofTrussType: ['', []],
      roofDeckingMaterial: ['', []],
      roofOpeningsCondition: ['', [Validators.required]],
      roofOpeningsRepairCost: [0, [Validators.required]],
      ceilingMaterial: ['', [Validators.required]],
      ceilingFinishes: ['', [Validators.required]],
      ceilingCondition: ['', [Validators.required]],
      ceilingRepairCost: [0, [Validators.required]]
    })
    // 06 Doors & Windows
    this.sixthFormGroup = this.fb.group({
      doorsMaterial: ['', [Validators.required]],
      doorsFinishes: ['', [Validators.required]],
      doorsCondition: ['', [Validators.required]],
      doorsRepairCost: [0, [Validators.required]],
      buildingWindowsMaterial: ['', [Validators.required]],
      buildingWindowsFinishes: ['', [Validators.required]],
      buildingWindowsCondition: ['', [Validators.required]],
      buildingWindowsRepairCost: [0, [Validators.required]],
      glazingMaterial: ['', []],
      glazingFinishes: ['', []],
      glazingCondition: ['', []],
      glazingRepairCost: [0, []],
      burglarProofCondition: ['', []],
      burglarProofRepairCost: [0, []],
      gatesCondition: ['', []],
      gatesRepairCost: [0, []]
    })
    // 07 Facilities
    this.seventhFormGroup = this.fb.group({
      roofLightsCondition: ['', []],
      roofLightsRepairCost: ['', []],
      fanLightMaterial: ['', [Validators.required]],
      fanLightFinishes: ['', [Validators.required]],
      fanLightCondition: ['', [Validators.required]],
      fanLightRepairCost: [0, [Validators.required]],
      airQualityCondition: ['', []],
      airQualityRepairCost: [0, []],
      ventilationSystemCondition: ['', []],
      ventilationSystemRepairCost: [0, []],
      airConditioningCondition: ['', []],
      airConditioningRepairCost: [0, []],
      furnitureMaterial: ['', [Validators.required]],
      furnitureFinishes: ['', [Validators.required]],
      furnitureCondition: ['', [Validators.required]],
      furnitureRepairCost: ['', []],  
      materialHandlingSystemCondition: ['', []],
      materialHandlingSystemRepairCost: [0, []],
      temperatureControlCondition: ['', []],
      temperatureControlRepairCost: [0, []],
      hotWaterCondition: ['', []],
      hotWaterRepairCost: [0, []],      
      coldWaterCondition: ['', []],
      coldWaterRepairCost: [0, []],
      gasTanksCondition: ['', []],
      gasTanksRepairCost: [0, []],
      gasPipingCondition: ['', []],
      gasPipingRepairCost: [0, []],
      compressedAirCondition: ['', []],
      compressedAirRepairCost: [0,[]],  
    })
    // 08 Structure
    this.eighthFormGroup = this.fb.group({
      trimMaterial: ['', [Validators.required]],
      trimFinishes: ['', [Validators.required]],
      trimCondition: ['', [Validators.required]],
      trimRepairCost: [0, [Validators.required]],
      frameMaterial: ['', [Validators.required]],
      frameFinishes: ['', [Validators.required]],
      frameCondition: ['', [Validators.required]],
      frameRepairCost: [0, [Validators.required]],
      buildingFacadeMaterial: ['', [Validators.required]],
      buildingFacadeFinishes: ['', [Validators.required]],
      buildingFacadeCondition: ['', [Validators.required]],
      buildingFacadeRepairCost: [0, [Validators.required]],
      corridorsMaterial: ['', [Validators.required]],
      corridorsFinishes: ['', [Validators.required]],
      corridorsCondition: ['', [Validators.required]],
      corridorsRepairCost: [0, [Validators.required]],
      entrancesMaterial: ['', [Validators.required]],
      entrancesFinishes: ['', [Validators.required]],
      entrancesCondition: ['', [Validators.required]],
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
      serviceDuctCondition: ['', [Validators.required]],
      serviceDuctRepairCost: [0, [Validators.required]],
      drainageCondition: ['', []],
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