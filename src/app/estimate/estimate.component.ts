import { Component, OnInit } from '@angular/core';
import { EstimateService } from './estimate.service';
import { Estimate } from './estimate';

@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.scss']
})
export class EstimateComponent implements OnInit {
  estimates: Estimate[];

  constructor(private estimateService: EstimateService) {
    console.log('***** EstimatesComponent constructor: start');
    console.log('***** EstimatesComponent constructor: end');
  }

  getEstimates(): void {
    this.estimateService.getEstimates().then(estimates => this.estimates = estimates);
  }

  ngOnInit() {
    this.getEstimates();
  }

}
