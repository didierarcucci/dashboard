import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Estimate } from './estimate';
import { ESTIMATES } from './mock-estimates';

@Injectable()
export class EstimateService {

  constructor(private router: Router) { }

  getEstimates(): Promise<Estimate[]> {
    return Promise.resolve(ESTIMATES);
  }

}
