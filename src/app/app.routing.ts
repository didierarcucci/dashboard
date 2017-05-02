import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';

//import { EstimateComponent } from './estimate/estimate.component';
//import { EstimateDetailsComponent } from './estimate/estimate-details/estimate-details.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'estimates',
        loadChildren: './estimates/estimates.module#EstimatesModule'
      }
      /*
      {
        path: 'estimates',
        component: EstimateComponent,
        data: {
          title: 'Estimate'
        }
      },
      {
        path: 'estimatedetails', 
        component: EstimateDetailsComponent, 
        data: { 
          title: 'Estimate Details'
        } 
      }*/
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
