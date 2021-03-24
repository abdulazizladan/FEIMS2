import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Material Modules
import { MatCardModule } from '@angular/material/card';

//Flex-layout
import { FlexLayoutModule } from '@angular/flex-layout';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
