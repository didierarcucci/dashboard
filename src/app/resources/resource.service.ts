import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ResourceService {

  constructor(private router: Router, private http: Http) { }

  getResources() {
    var url = '/local/resources';

    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch(this.getError);
  }

  getResourceDetails(pId: number) {
    var url = '/local/resourcedetails';

    console.log('... URL TO CALL => ' + url);

    var params = new URLSearchParams();
    params.set('resourceId', pId.toString());

    return this.http.get(url, { search : params })
      .map((res: Response) => res.json())
      .catch(this.getError);
  }

  private getError(error: Response): Observable<any>{
      console.log(error);
      return Observable.throw(error.json() || 'Server Issue');
  }
}
