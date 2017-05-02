import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstimateComponent } from './estimate/estimate.component';
import { EstimateDetailsComponent } from './estimate-details/estimate-details.component';

import { EstimatesRoutingModule } from './estimates-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EstimatesRoutingModule
  ],
  declarations: [
    EstimateComponent,
    EstimateDetailsComponent
  ]
})
export class EstimatesModule { }
