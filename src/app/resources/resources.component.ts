import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Resource } from './resource';
import { ResourceService } from './resource.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  resources: Resource[];

  constructor(private resourceSvc: ResourceService, private router: Router) {
    this.getResources();
  }

  getResources() {
    this.resources = [];
    this.resourceSvc.getResources()
      .subscribe(response => {
        //console.log('*** RESPONSE FROM SERVICE CALL => ' + JSON.stringify(response));
        this.resources = response;
      });
  }

  isActive(startDate: Date, endDate: Date) {
    var result: string;
    var today: Date = new Date();

    if (endDate == null || endDate >= today)
      return 'A';
    else if (startDate < today)
      return 'P';
    else
      return 'I';
    }

  ngOnInit() {
  }

}
