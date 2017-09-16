import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Resource } from './resource';
import { ResourceService } from './resource.service';

import { PagerService } from '../shared/pager.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  resources: Resource[];

  pagedResources: Resource[];

  pager: any = {};

  constructor(private pagerSvc: PagerService, private resourceSvc: ResourceService, private router: Router) { }

  getResources() {
    this.resources = [];
    this.resourceSvc.getResources()
      .subscribe(response => {
        //console.log('*** RESPONSE FROM SERVICE CALL => ' + JSON.stringify(response));
        this.resources = response;
        this.setPage(1);
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

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.pagerSvc.getPager(this.resources.length, page, 10, 4);

    // get current page of items
    this.pagedResources = this.resources.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  ngOnInit() {
    this.getResources();
  }

}
