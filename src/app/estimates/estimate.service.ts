import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EstimateService {

  constructor(private router: Router, private http: Http) { }

  getRecentEstimates() {
    var url = '/local/recentestimates';
    //var url = '/api/Estimate?recordCount=10';

    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch(this.getError);
  }

  getEstimate(pId: number) {
    //var url = '/local/estimatedetails/' + pId;
    var url = '/local/estimatedetails';

    console.log('... URL TO CALL => ' + url);

    var params = new URLSearchParams();
    params.set('estimateId', pId.toString());

    return this.http.get(url, { search : params })
      .map((res: Response) => res.json())
      .catch(this.getError);
  }

  getComponentList(pEstimateId: number) {
    var url = '/local/componentlist/' + pEstimateId;

    console.log('... URL TO CALL => ' + url);

    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch(this.getError);
  }

  getEstimateRoleList(pEstimateId: number) {
    var url = '/local/estimaterolelist/' + pEstimateId;

    console.log('... URL TO CALL => ' + url);

    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch(this.getError);
  }

  getComponentDetails(pComponentId: number) {
    //var url = '/local/componentdetails/' + pComponentId;
    var url = '/local/componentdetails';

    console.log('... URL TO CALL => ' + url);

    var params = new URLSearchParams();
    params.set('componentId', pComponentId.toString());

    return this.http.get(url, { search : params })
      .map((res: Response) => res.json())
      .catch(this.getError);
  }

  getAssignmentList(pComponentId: number) {
    var url = 'local/assignmentlist';

    console.log('... URL TO CALL => ' + url);

    var params = new URLSearchParams();
    params.set('componentId', pComponentId.toString());

    return this.http.get(url, { search : params })
      .map((res: Response) => res.json())
      .catch(this.getError);
  }

  private getError(error: Response): Observable<any>{
      console.log(error);
      return Observable.throw(error.json() || 'Server Issue');
  }

}
