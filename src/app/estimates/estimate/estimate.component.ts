import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstimateService } from '../estimate.service';
import { Estimate } from '../estimate';
import { EstimateDetailsComponent } from '../estimate-details/estimate-details.component';
import { PagerService } from '../../shared/pager.service';

@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.scss']
})
export class EstimateComponent implements OnInit {
  estimates: Estimate[];
  pagedEstimates: Estimate[];

  pager: any = {};

  constructor(private pagerSvc: PagerService, private estimateService: EstimateService, private router: Router) {}

  getRecentEstimates() {
    this.estimates = [];
    this.estimateService.getRecentEstimates()
      .subscribe(response => {
        //console.log('*** RESPONSE FROM SERVICE CALL => ' + JSON.stringify(response));
        this.estimates = response;
        this.setPage(1);
      });
  }

  goToDetails(pEstimateId: number) {
    console.log('NAVIGATING TO ESTIMATE DETAILS ... ESTIMATEID: ' + pEstimateId);
    this.router.navigate(['/estimates', 'details', pEstimateId]);
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.pagerSvc.getPager(this.estimates.length, page);

    // get current page of items
    this.pagedEstimates = this.estimates.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  ngOnInit() {
    this.getRecentEstimates();
  }

}
