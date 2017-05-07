import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Estimate } from '../estimate';
import { EstimateService } from '../estimate.service';

@Component({
  selector: 'app-estimate-details',
  templateUrl: './estimate-details.component.html',
  styleUrls: ['./estimate-details.component.scss']
})
export class EstimateDetailsComponent implements OnInit, OnDestroy {

  EstimateHdr: Estimate;
  private sub: any;

  constructor(private route: ActivatedRoute, private estimateService: EstimateService) { }

  getEstimateDetails(pId: number) {
    this.estimateService.getEstimate(pId)
      .subscribe(response => {
        console.log('RESPONSE FROM SERVICE CALL => ' + JSON.stringify(response));
        this.EstimateHdr = response;
      });
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let estimateId = +params['estimateId'];
      console.log('ESTIMATE DETAILS ... RETRIEVING ESTIMATEID => ' + estimateId);
      this.getEstimateDetails(estimateId);
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
