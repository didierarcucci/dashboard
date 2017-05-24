import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { ytdprjhrs, yoyprjhrs, yoyprjdls } from './mock-dashboard';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  yoyprjhrs: any[];
  yoyprjdls: any[];

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

  colorScheme = {
    domain: ['#F44336', '#3F51B5', '#8BC34A', '#2196F3', '#009688', '#FF5722', '#CDDC39', '#00BCD4', '#FFC107', '#795548', '#607D8B']
  }; */

  colorScheme = "ocean";

  constructor( ) {
    Object.assign(this, {yoyprjhrs});
    Object.assign(this, {yoyprjdls});
   }

   onSelect(event) {
    console.log(event);
  }

  ngOnInit() { }
}
