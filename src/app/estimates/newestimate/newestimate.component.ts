import { Component, OnInit } from '@angular/core';
import { Estimate } from '../estimate';

@Component({
  selector: 'app-newestimate',
  templateUrl: './newestimate.component.html',
  styleUrls: ['./newestimate.component.scss']
})
export class NewEstimateComponent implements OnInit {
  myNewEstimate = new Estimate('');

  constructor() {
  }

  reset() {
    this.myNewEstimate = new Estimate('');
  }

  save() {
    
  }

  ngOnInit() {
  }

}
