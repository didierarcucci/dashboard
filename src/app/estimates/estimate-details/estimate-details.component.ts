import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';
import { DatePipe } from '@angular/common';



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

  public myModal;
  public largeModal;
  public smallModal;
  public primaryModal;
  public successModal;
  public warningModal;
  public dangerModal;
  public infoModal;

  EstimateHdr: Estimate;
  ComponentList: EstimateDtlComponent[];
  EstimateRoleList: EstimateRole[];

  showEstimateContent: boolean = true;
  showComponentListContent: boolean = false;
  showEstimateRoleListContent: boolean = false;

  private sub: any;

  constructor(private route: ActivatedRoute, private estimateService: EstimateService, private router: Router, private datepipe: DatePipe) { }

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

  printEstimate(pEstimate: Estimate) {
    let printContents, popupWin, formattedDate;

    formattedDate = this.datepipe.transform(pEstimate.UpdateDate, 'yyyymmdd');
    
    printContents = document.getElementById('printableEstimate').innerHTML;
    
    popupWin = window.open('', '_blank', 'top=0,left=0,height=auto,width=auto');
    popupWin.document.open();

    popupWin.document.write(
      `
      <html>
        <head>
          <title>IS Estimate ${pEstimate.EstimateName} ${formattedDate}</title>
          <style>
            body {
              font-family: Sans-Serif;
            }

            h1 {
                color: #1F497D;
                font-style: italic;
            }
            
            h2 {
                color: #808080;
                vertical-align: top;
            }
            
            h3 {
                color: #1F497D;
            }
            
            table.tabstyle {
                border-width: 1px;
                border-color: #4F81BD;
                border-collapse: collapse;
            }
            
            table.tabstyle th {
                background-color: #4F81BD;
                color: #FFFFFF;
                padding: 7px;
                border-color: #4F81BD;
            }
            
            table.tabstyle td {
                padding: 7px;
                border-color: #4F81BD;
                border: 1px solid #4F81BD;
            }
            
            table.tabstyle tr:nth-child(even) td{
                background-color: #DCE6F1;
            }
            
            table.tabstyle tr:last-child td{
                background-color: #FFFFFF;
                border-top: double;
                border-color: #4F81BD;
                font-weight: bold;
                text-align: right;
            }
          </style>
        </head>
        <body>${printContents}</body>
      </html>
      `
    );

    popupWin.document.close();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
