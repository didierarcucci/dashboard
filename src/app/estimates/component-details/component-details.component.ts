import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EstimateDtlComponent } from '../estimatedtl-component';
import { Assignment } from '../assignment';
import { EstimateService } from '../estimate.service';

@Component({
  selector: 'app-component-details',
  templateUrl: './component-details.component.html',
  styleUrls: ['./component-details.component.scss']
})
export class ComponentDetailsComponent implements OnInit, OnDestroy {

  ComponentHdr: EstimateDtlComponent;
  AssignmentList: Assignment[];

  showComponentContent: boolean = true;
  showAssignmentListContent: boolean = false;

  editMode: boolean = false;

  private sub: any;

  constructor(private route: ActivatedRoute, private estimateService: EstimateService) { }

  setEditMode() {
    this.editMode = true;
  }

  setDisplayMode() {
    this.editMode = false;
  }

  toggleContent(pCard: string) {
    console.log('RECEIVED CLICK ON CARD => ' + pCard);

    if(pCard == "component") {
      this.showComponentContent = !this.showComponentContent;
    } else if (pCard == "assignments") {
      this.showAssignmentListContent = !this.showAssignmentListContent;
    }

    console.log("SHOW COMPONENT CONTENT => " + this.showComponentContent);
    console.log("SHOW ASSIGNMENTS CONTENT => " + this.showAssignmentListContent);
  }

  getComponentDetails(pComponentId: number) {
    this.estimateService.getComponentDetails(pComponentId)
      .subscribe(response => {
        console.log('RESPONSE FROM SERVICE CALL => ' + JSON.stringify(response));
        this.ComponentHdr = response;
      });
  }

  getAssignmentList(pComponentId: number) {
    this.estimateService.getAssignmentList(pComponentId)
      .subscribe(response => {
        console.log('RESPONSE FROM SERVICE CALL => ' + JSON.stringify(response));
        this.AssignmentList = response;
      });
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let componentId = +params['ComponentId'];
      console.log('COMPONENT DETAILS ... COMPONENTID => ' + componentId);
      this.getComponentDetails(componentId);
      this.getAssignmentList(componentId);
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
