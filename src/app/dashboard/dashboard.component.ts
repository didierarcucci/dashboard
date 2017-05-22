import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { dash } from './mock-dashboard';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  dash: any[];

  view: any[] = [700, 400];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };

  constructor( ) {
    Object.assign(this, {dash});
   }

   onSelect(event) {
    console.log(event);
  }

  ngOnInit() { }
}
