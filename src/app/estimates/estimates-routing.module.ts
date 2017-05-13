import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstimateComponent } from './estimate/estimate.component';
import { EstimateDetailsComponent } from './estimate-details/estimate-details.component';
import { ComponentDetailsComponent } from './component-details/component-details.component';

const routes: Routes = [
  {
      path: '',
      redirectTo: 'main',
      pathMatch: 'full'
  },
  {
    path: '',
    data: {
        title: 'Estimates'
    },
    children: [
        {
            path: 'main',
            component: EstimateComponent,
            data: {
                title: ''
            }
        },
        {
            path: 'details/:estimateId',
            component: EstimateDetailsComponent,
            data: {
                title: 'Estimate Details'
            }
        },
        {
            path: 'component/:ComponentId',
            component: ComponentDetailsComponent,
            data: {
                title: 'Component Details'
            }
        }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstimatesRoutingModule {}