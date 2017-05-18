import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { EstimateComponent } from './estimate/estimate.component';
import { EstimateDetailsComponent } from './estimate-details/estimate-details.component';

import { EstimatesRoutingModule } from './estimates-routing.module';
import { ComponentDetailsComponent } from './component-details/component-details.component';

import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    EstimatesRoutingModule,
    ModalModule
  ],
  declarations: [
    EstimateComponent,
    EstimateDetailsComponent,
    ComponentDetailsComponent
  ],
  providers: [
    DatePipe
  ]
})
export class EstimatesModule { }
