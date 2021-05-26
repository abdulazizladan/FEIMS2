import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorInterceptor } from '../auth/services/interceptor.interceptor';

import { HttpClientModule } from '@angular/common/http';

import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { ReactiveFormsModule } from '@angular/forms';

//required Egret Module
import { SharedComponentsModule } from '../shared/components/shared-components.module';
import { AppChartsModule } from '../views/charts/charts.module';

//Material Modules
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatRadioModule } from '@angular/material/radio';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';


//Flex-layout
import { FlexLayoutModule } from '@angular/flex-layout';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AddBuildingComponent } from './components/add-building/add-building.component';
//import { SummaryComponent } from './components/summary/summary.component';
import { BuildingComponent } from './components/building/building.component';
import { BuildingsComponent } from './components/buildings/buildings.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AboutComponent } from './components/about/about.component';
import { BuildingSummaryComponent } from './components/building-summary/building-summary.component';
import { SiteSurveyComponent } from './components/site-survey/site-survey.component';
import { AddSiteComponent } from './components/add-site/add-site.component';


@NgModule({
  declarations: [
    HomeComponent, 
    AddBuildingComponent, 
    //SummaryComponent, 
    BuildingComponent, 
    BuildingsComponent, 
    DashboardComponent, 
    FooterComponent, 
    ReportsComponent, 
    SettingsComponent, 
    SidenavComponent, 
    ToolbarComponent, 
    AboutComponent, 
    BuildingSummaryComponent, SiteSurveyComponent, AddSiteComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppChartsModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatExpansionModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDialogModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatListModule,
    MatGridListModule,
    MatDatepickerModule,
    MatStepperModule,
    MatCheckboxModule,
    MatRadioModule,
    MatChipsModule,
    MatDividerModule,
    FlexLayoutModule,
    AdminRoutingModule,
    NgxEchartsModule.forRoot({
      echarts
    })
  ], 
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorInterceptor,
      multi: true
    }
  ]
})
export class AdminModule { }
