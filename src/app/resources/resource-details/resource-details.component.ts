import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Resource } from '../resource';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.scss']
})
export class ResourceDetailsComponent implements OnInit {
  resourceDetails: Resource;
  private sub: any;


  constructor(private route: ActivatedRoute, private router: Router, private resourceService: ResourceService) { }

  getResourceDetails(pId: number) {
    this.resourceService.getResourceDetails(pId)
      .subscribe(response => {
        console.log('RESPONSE FROM SERVICE CALL => ' + JSON.stringify(response));
        this.resourceDetails = response;
      });
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log('ESTIMATE DETAILS ... RETRIEVING ESTIMATEID => ' + params['resourceId']);
      this.getResourceDetails(params['resourceId']);
    });
  }

  onSubmit(form: any): void {  
    console.log('you submitted value:', form);  
  }

}
