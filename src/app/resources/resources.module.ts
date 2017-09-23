import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ResourcesComponent } from './resources.component';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';

import { ResourcesRoutingModule } from './resources-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ResourcesRoutingModule
  ],
  declarations: [
    ResourcesComponent,
    ResourceDetailsComponent
  ],
  providers: [
    DatePipe
  ]
})
export class ResourcesModule { }
