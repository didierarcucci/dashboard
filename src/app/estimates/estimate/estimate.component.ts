import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstimateService } from '../estimate.service';
import { Estimate } from '../estimate';
import { EstimateDetailsComponent } from '../estimate-details/estimate-details.component';

@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.scss']
})
export class EstimateComponent implements OnInit {
  estimates: Estimate[];

  constructor(private estimateService: EstimateService, private router: Router) {
    console.log('***** EstimatesComponent constructor: start');
    this.getRecentEstimates();
    console.log('***** EstimatesComponent constructor: end');
  }

  getRecentEstimates() {
    this.estimates = [];
    this.estimateService.getRecentEstimates()
      .subscribe(response => {
        console.log('*** RESPONSE FROM SERVICE CALL => ' + JSON.stringify(response));
        this.estimates = response;
      });
  }

  goToDetails(pEstimateId: number) {
    console.log('NAVIGATING TO ESTIMATE DETAILS ... ESTIMATEID: ' + pEstimateId);
    this.router.navigate(['/estimates', 'details', pEstimateId]);
  }

  ngOnInit() { }

}
