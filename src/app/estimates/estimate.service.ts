import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/throw';

import { Estimate } from './estimate';
//import { ESTIMATES } from './mock-estimates';

@Injectable()
export class EstimateService {
  //private recentEstimatesUrl = '/api/Estimate?recordCount=5';

  constructor(private router: Router, private http: Http) { }

  getRecentEstimates() {
    var url = '/api/recentestimates';
    //var url = '/api/Estimate?recordCount=5';

    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch(this.getError);
  }

  getEstimate(id: number) {
    return this.http.get('/api/estimatedetails?id=${id}')
      .map((res: Response) => res.json())
      .catch(this.getError);
  }

  private getError(error: Response): Observable<any>{
      console.log(error);
      return Observable.throw(error.json() || 'Server Issue');
  }

}
