import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//required Egret Module
import { SharedComponentsModule } from '../shared/components/shared-components.module';

//Material Modules
import { MatCardModule } from '@angular/material/card';

//Flex-layout
import { FlexLayoutModule } from '@angular/flex-layout';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AddBuildingComponent } from './components/add-building/add-building.component';
import { SummaryComponent } from './components/building/summary/summary.component';
import { BuildingComponent } from './components/building/building.component';
import { BuildingsComponent } from './components/buildings/buildings.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';


@NgModule({
  declarations: [HomeComponent, AddBuildingComponent, SummaryComponent, BuildingComponent, BuildingsComponent, DashboardComponent, FooterComponent, ReportsComponent, SettingsComponent, SidenavComponent, ToolbarComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    MatCardModule,
    FlexLayoutModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
