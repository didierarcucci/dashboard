import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EstimateComponent } from './estimate/estimate.component';
import { EstimateDetailsComponent } from './estimate-details/estimate-details.component';

import { EstimatesRoutingModule } from './estimates-routing.module';
import { ComponentDetailsComponent } from './component-details/component-details.component';

import { ModalModule } from 'ngx-bootstrap';
import { NewEstimateComponent } from './newestimate/newestimate.component';

@NgModule({
  imports: [
    CommonModule,
    EstimatesRoutingModule,
    ModalModule,
    FormsModule
  ],
  declarations: [
    EstimateComponent,
    EstimateDetailsComponent,
    ComponentDetailsComponent,
    NewEstimateComponent
  ],
  providers: [
    DatePipe
  ]
})
export class EstimatesModule { }
