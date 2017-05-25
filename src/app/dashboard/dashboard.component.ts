import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { ytdprjhrs, yoyprjhrs, yoyprjdls, yoycapdls, yoyprjhrsrestyp, yoyprjdlsrestyp, yoycapbymo } from './mock-dashboard';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  ytdprjhrs: any[];
  yoyprjhrs: any[];
  yoyprjdls: any[];
  yoycapdls: any[];
  yoyprjhrsrestyp: any[];
  yoyprjdlsrestyp: any[];
  yoycapbymo: any[];

  view: any[] = [700, 400];

  showYAxis = true;
  showXAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Year';
  yAxisLabel = 'Hours';

  /* colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  */

  colorScheme = "ocean";

  constructor( ) {
    Object.assign(this, {ytdprjhrs});
    Object.assign(this, {yoyprjhrs});
    Object.assign(this, {yoyprjdls});
    Object.assign(this, {yoycapdls});
    Object.assign(this, {yoyprjhrsrestyp});
    Object.assign(this, {yoyprjdlsrestyp});
    Object.assign(this, {yoycapbymo});
   }

   onSelect(event) {
    console.log(event);
  }

  ngOnInit() { }
}
