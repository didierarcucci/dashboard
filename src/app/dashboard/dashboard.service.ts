import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DashboardService {

  constructor(private router: Router, private http: Http) { }

  getDashboardKPIs() {
    var url = '/local/dashboardkpi';

    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch(this.getError);
  }

  private getError(error: Response): Observable<any>{
      console.log(error);
      return Observable.throw(error.json() || 'Server Issue');
  }

}
