import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DashboardKPI } from './dashboardkpi';
import { DashboardService } from './dashboard.service';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  dashboardKPIs:  DashboardKPI;

  // convert Hex to RGBA
  public convertHex(hex: string, opacity: number) {
    hex = hex.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const rgba = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity / 100 + ')';
    return rgba;
  }

  private randomArray (length: number, max: number): Array<any> {
    var res = [];
    for (var i = 0; i<length; i++) {
      res.push(Math.round(Math.random() * max));
    }
    return res;
  }

  public getVariance (fromvalue: number, tovalue: number): string {
    var res;
    var sign;

    var resnum = Math.round(((tovalue/fromvalue)-1)*100);

    if (resnum > 0)
      sign = '+';
    else if (resnum < 0)
      sign = '-';
    else
      sign = '';

    res = sign + resnum.toString() + '%';

    return res;
  }

  public shortFormat(value: number, currency: string): string {
    var res;
    var shortnum;
    var sign;
    var cur;

    if (currency == '') cur = '';
    else if (currency == 'USD') cur = '$';

    if (value >= 100000) {
      shortnum = Math.round(value/1000);
      sign = 'k';
    }
    else if (value >= 1000000) {
      shortnum = (value/1000000).toPrecision(1);
      sign = 'M';
    }
    else {
      shortnum = Math.round(value);
      sign = '';
    }

    res = cur + shortnum + sign;

    return res;
  }

  constructor(private dashboardService: DashboardService, private router: Router) { 
    this.getDashboardKPIs();
  }

  onSelect(event) {
    console.log(event);
  }

  getDashboardKPIs() {
    this.dashboardService.getDashboardKPIs()
    .subscribe(response => {
      console.log('*** RESPONSE FROM SERVICE CALL => ' + JSON.stringify(response));
      this.dashboardKPIs = response;
    });
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  ngOnInit() { 
  }

  currencyFormat(val: any): any {
    return val.toLocaleString('en-EN', {style: 'currency', currency: 'USD'});
  }

  percentFormat(val: any): any {
    return val+'%';
  }

  // Ng2 charts options
  public prjhrspermo2: Array<any> = [
    {
      data: [2210, 1943, 2312, 2280, 1828],
      label: '2017'
    }
  ];

  public prjhrs: Array<any> = [
    {
      data: [1693.2, 1921.6, 1377.3, 1333.8, 1722.6, 1359.4, 1636.8, 1760, 2029.2, 2129.8, 1932, 2061.8, 2352, 1850.65, 2321.6, 2019.5, 1856.6, 2097.6, 2034.2, 2210.4, 1942.6, 2312.4, 2279.6, 2519.7],
      label: 'Project work'
    },
    {
      data: [1822, 1822, 1822, 1822, 1822, 1822, 1822, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN],
      label: 'Avg 2015'
    },
    {
      data: [NaN, NaN, NaN, NaN, NaN, NaN, NaN, 2037, 2037, 2037, 2037, 2037, 2037, 2037, 2037, 2037, 2037, 2037, 2037, NaN, NaN, NaN, NaN, NaN],
      label: 'Avg 2016'
    },
    {
      data: [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, 2253, 2253, 2253, 2253, 2253],
      label: 'Avg 2017'
    }
  ];

  public lineChartColours: Array<any> = [
    { // grey
      backgroundColor: '#20a8d8',
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];

  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May'];
  public mainChartLabels: Array<any> = ['Jun-15', 'Jul-15', 'Aug-15', 'Sep-15','Oct-15', 'Nov-15', 'Dec-15',
                                        'Jan-16', 'Feb-16', 'Mar-16', 'Apr-16', 'May-16', 'Jun-16', 'Jul-16', 'Aug-16', 'Sep-16','Oct-16', 'Nov-16', 'Dec-16',
                                        'Jan-17', 'Feb-17', 'Mar-17', 'Apr-17', 'May-17'];

  public lineChartOptions: any = {
    responsive: true,
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

  public mainChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          gridLines: { // removes vertical lines
            drawOnChartArea: false,
          },
          ticks: {
            minRotation: 45
          }
        }
      ],
      yAxes: [{
        ticks: {
          beginAtZero: false,
          maxTicksLimit: 5,
          stepSize: Math.ceil(1400 / 5),
          max: 2600,
          min: 1200
        }
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    }
  }; 

   public mainChartColours: Array<any> = [
    {
      backgroundColor: this.convertHex('#63c2de', 10),
      borderColor: '#63c2de'
    },
    {
      backgroundColor: 'transparent',
      borderColor: '#f86c6b',
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5]
    },
    {
      backgroundColor: 'transparent',
      borderColor: '#f86c6b',
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5]
    },
    {
      backgroundColor: 'transparent',
      borderColor: '#f86c6b',
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5]
    }
  ];

  public regionValues: Array<any> = [
    {
      data: [68,41,31,73,84,31,68,25,66,42],
      label: 'My Array'
    }
  ]

  public regionArray: Array<any> = ['Region1', 'Region2', 'Region3', 'Region4', 'Region5', 'Region6', 'Region7', 'Region8', 'Region9', 'Region10'];

  public barChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  }; 
}
