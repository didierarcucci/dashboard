import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as d3 from 'd3-shape';


import { ytdprjhrs, yoyprjhrs, yoyprjdls, yoycapdls, yoyprjhrsrestyp, yoyprjdlsrestyp, yoycapbymo, prjhrspermo } from './mock-dashboard';

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
  prjhrspermo: any[];

  constructor( ) {
    Object.assign(this, {ytdprjhrs});
    Object.assign(this, {yoyprjhrs});
    Object.assign(this, {yoyprjdls});
    Object.assign(this, {yoycapdls});
    Object.assign(this, {yoyprjhrsrestyp});
    Object.assign(this, {yoyprjdlsrestyp});
    Object.assign(this, {yoycapbymo});
    Object.assign(this, {prjhrspermo});
   }

   onSelect(event) {
    console.log(event);
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  ngOnInit() { }

  // Ngx charts options
  view: any[] = [700, 400];

  showYAxis = true;
  showXAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Year';
  yAxisLabel = 'Hours';
  colorScheme = "ocean";

  currencyFormat(val: any): any {
    return val.toLocaleString('en-EN', {style: 'currency', currency: 'USD'});
  }

  percentFormat(val: any): any {
    return val+'%';
  }

  curveType(context: any): any {
    return d3.curveNatural(context);
  }

  /* colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  */

  // Ng2 charts options
  public prjhrspermo2: Array<any> = [
    {
      data: [2210, 1943, 2312, 2280, 1828],
      label: '2017'
    }
  ];

  public lineChartColours: Array<any> = [
    { // grey
      backgroundColor: '#20a8d8',
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];

  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May'];

  public lineChartOptions: any = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent'
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false
        }
      }],
    },
    elements: {
      line: {
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    },
    responsive: true,
    animation: {
        onComplete: function () {
            var chartInstance = this.chart,
            ctx = chartInstance.ctx;
            
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';

            this.data.datasets.forEach(function (dataset, i) {
                var meta = chartInstance.controller.getDatasetMeta(i);
                meta.data.forEach(function (datapoint, index) {
                    var data = dataset.data[index];
                    ctx.fillText(data, datapoint._model.x, datapoint._model.y - 5);
                });
            });
        }
    }
  };
}
