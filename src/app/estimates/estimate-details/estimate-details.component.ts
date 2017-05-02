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

  EstimateId: number;
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  getEstimateDetails(id: number) {
    console.log('im here');
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.EstimateId = +params['id'];
      this.getEstimateDetails(this.EstimateId);
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
