import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildingSummaryComponent } from './components/building-summary/building-summary.component';
//import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'building/:id',
    component: BuildingSummaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
