import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EstimateService {

  constructor(private router: Router, private http: Http) { }

  getRecentEstimates() {
    var url = '/api/recentestimates';
    //var url = '/api/Estimate?recordCount=10';

    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch(this.getError);
  }

  getEstimate(pId: number) {
    var url = '/api/estimatedetails/' + pId;

    console.log('... URL TO CALL => ' + url);

    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch(this.getError);
  }

  getComponentList(pEstimateId: number) {
    var url = '/api/componentlist/' + pEstimateId;

    console.log('... URL TO CALL => ' + url);

    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch(this.getError);
  }

  getEstimateRoleList(pEstimateId: number) {
    var url = '/api/estimaterolelist/' + pEstimateId;

    console.log('... URL TO CALL => ' + url);

    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch(this.getError);
  }

  private getError(error: Response): Observable<any>{
      console.log(error);
      return Observable.throw(error.json() || 'Server Issue');
  }

}
