import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResourcesComponent } from './resources.component';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';

const routes: Routes = [
  {
      path: '',
      redirectTo: 'main',
      pathMatch: 'full'
  },
  {
    path: '',
    data: {
        title: 'Resources'
    },
    children: [
        {
            path: 'main',
            component: ResourcesComponent,
            data: {
                title: ''
            }
        },
        {
            path: 'resourcedetails/:resourceId',
            component: ResourceDetailsComponent,
            data: {
                title: 'Resource Details'
            }
        }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule {}