import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  editMode: boolean = false;

  pdfMode: boolean = false;

  private sub: any;

  constructor(private route: ActivatedRoute, private estimateService: EstimateService, private router: Router) { 
    this.pdfMode = false;
  }

  setEditMode() {
    this.editMode = true;
  }

  setDisplayMode() {
    this.editMode = false;
  }

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

  goToDetails(pComponentId: number) {
    console.log('NAVIGATING TO COMPONENT DETAILS ... COMPONENTID: ' + pComponentId);
    this.router.navigate(['/estimates', 'component', pComponentId]);
  }

  goToEstimatePDF(pEstimateId: number) {
    console.log('NAVIGATING TO ESTIMATEPDF ... ESTIMATEID: ' + pEstimateId);
    //this.router.navigate(['/estimates', 'estimatepdf', pEstimateId]);
    this.pdfMode = true;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
