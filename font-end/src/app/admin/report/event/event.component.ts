import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
declare const $: any;
declare const Chart: any;

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
  constructor(private _eventService: EventService) {}

  eventData: any;

  ngOnInit(): void {
    this._eventService.getAnswerReport(1).then((res: any) => {
      console.log(res);
    });

    this._eventService.getEventReport(15).then((res: any) => {
      console.log(res);
    });

    this._eventService.getEventAdmin().then((res: any) => {
      console.log(res);
      this.eventData = res;
    });

    this.loadChart();
  }

  reportModal(data: any) {}

  loadChart() {
    let sexChart = new MyChart("sexChart", ["ชาย","หญิง"],[12,20],[
      'rgba(54, 162, 235, 0.9)',
      'rgba(255, 99, 132, 0.9)',
    ])
    sexChart.createChart()

    let majorChart = new MyChart("majorChart", ["ชาย","หญิง"],[12,20],[
      'rgba(54, 162, 235, 0.9)',
      'rgba(255, 99, 132, 0.9)',
    ])
    majorChart.createChart()

    let facultyChart = new MyChart("facultyChart", ["ชาย","หญิง"],[12,20],[
      'rgba(54, 162, 235, 0.9)',
      'rgba(255, 99, 132, 0.9)',
    ])
    facultyChart.createChart()
  }
}

class MyChart {
  private setChartName: string;
  private setChartLabels: any;
  private setChartData: any;
  private setChartColor: any ;
  
  constructor(chartName: string, chartLabels:any, chartData:any, chartColor:any) {
    this.setChartName = chartName;
    this.setChartLabels = chartLabels;
    this.setChartData = chartData;
    this.setChartColor = chartColor;
  }

  createChart(){
    new Chart(`${this.setChartName}`, {
      type: 'pie',
      data: {
        labels: this.setChartLabels,
        datasets: [
          {
            label: '# of Votes',
            data: this.setChartData ,
            backgroundColor: this.setChartColor,
            borderColor: this.setChartColor,
            borderWidth: 1,
          },
        ],
      },
      showDatapoints: true,
      options: {
        tooltips: {
          enabled: false,
        },
        pieceLabel: {
          mode: 'value%',
          fontSize: 25,
        },
        responsive: true,
        legend: {
          position: 'top',
          labels: {
            fontSize: 20,
          },
        },
        animation: {
          animateScale: true,
          animateRotate: true,
        },
      },
    });
  }

}
