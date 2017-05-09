import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Estimate } from '../estimate';
import { EstimateDtlComponent } from '../estimatedtl-component';
import { EstimateRole } from '../estimaterole';
import { EstimateService } from '../estimate.service';


@Component({
  selector: 'app-estimate-details',
  templateUrl: './estimate-details.component.html',
  styleUrls: ['./estimate-details.component.scss']
})
export class EstimateDetailsComponent implements OnInit, OnDestroy {

  EstimateHdr: Estimate;
  ComponentList: EstimateDtlComponent[];
  EstimateRoleList: EstimateRole[];

  showEstimateContent: boolean = true;
  showComponentListContent: boolean = false;
  showEstimateRoleListContent: boolean = false;

  private sub: any;

  constructor(private route: ActivatedRoute, private estimateService: EstimateService) { }

  toggleContent(pCard: string) {
    console.log('RECEIVED CLICK ON CARD => ' + pCard);

    if(pCard == "estimate") {
      this.showEstimateContent = !this.showEstimateContent;
    } else if (pCard == "components") {
      this.showComponentListContent = !this.showComponentListContent;
    } else if (pCard == "roles") {
      this.showEstimateRoleListContent = !this.showEstimateRoleListContent;
    }

    console.log("SHOW ESTIMATE CONTENT => " + this.showEstimateContent);
    console.log("SHOW COMPONENT CONTENT => " + this.showComponentListContent);
    console.log("SHOW ROLE CONTENT => " + this.showEstimateRoleListContent);
  }
  
  getEstimateDetails(pId: number) {
    this.estimateService.getEstimate(pId)
      .subscribe(response => {
        console.log('RESPONSE FROM SERVICE CALL => ' + JSON.stringify(response));
        this.EstimateHdr = response;
      });
  }

  getComponentList(pEstimateId: number) {
    this.estimateService.getComponentList(pEstimateId)
      .subscribe(response => {
        console.log('RESPONSE FROM SERVICE CALL => ' + JSON.stringify(response));
        this.ComponentList = response;
      });
  }

  getEstimateRoleList(pEstimateId: number) {
    this.estimateService.getEstimateRoleList(pEstimateId)
      .subscribe(response => {
        console.log('RESPONSE FROM SERVICE CALL => ' + JSON.stringify(response));
        this.EstimateRoleList = response;
      });
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let estimateId = +params['estimateId'];
      console.log('ESTIMATE DETAILS ... RETRIEVING ESTIMATEID => ' + estimateId);
      this.getEstimateDetails(estimateId);
      this.getComponentList(estimateId);
      this.getEstimateRoleList(estimateId);
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
