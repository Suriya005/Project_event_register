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
  reportData: any 
  questionData: any;

  avgAnswer: any 
  

  ngOnInit(): void {

    this._eventService.getAnswerReport(1).then((res: any) => {
      // console.log('getAnswerReport',res);
    });

    this._eventService.getEventAdmin().then((res: any) => {
      // console.log('getEventAdmin',res);
      this.eventData = res;
    });
    this.loadChart(15);
  }

  reportModal(data: any) {}

  setChart(){
    
  }

  loadChart(data:any) {
    console.log('ดกดกดก',data)
    this._eventService.getQuestionById(data).then((res: any) => {
      
      this.questionData = res
    })
    this._eventService.getEventReport(data).then((res: any) => {
      this.reportData = res
      console.log(this.reportData)
      this.avgAnswer = Number(this.reportData.answerDataReply[0][2]) + Number(this.reportData.answerDataReply[1][2])
    
    let sexChart = new MyChart("sexChart", this.reportData.sexNameArray,this.reportData.sexCountArray,[
      'rgba(54, 162, 235, 0.9)',
      'rgba(255, 99, 132, 0.9)',
    ])
    sexChart.createChart()

    let majorChart = new MyChart("majorChart", this.reportData.majorNameArray,this.reportData.majorCountArray,[
      'rgba(54, 162, 235, 0.9)',
      'rgba(255, 99, 132, 0.9)',
    ])
    majorChart.createChart()
    majorChart.setFont(12)

    let facultyChart = new MyChart("facultyChart", this.reportData.facultyNameArray,this.reportData.facultyCountArray,[
      'rgba(54, 162, 235, 0.9)',
      'rgba(255, 99, 132, 0.9)',
    ])
    facultyChart.createChart()
  });
  }
}

class MyChart {
  private setChartName: string;
  private setChartLabels: any;
  private setChartData: any;
  private setChartColor: any ;
  private setFontSize: any = 25
  
  constructor(chartName: string, chartLabels:any, chartData:any, chartColor:any) {
    this.setChartName = chartName;
    this.setChartLabels = chartLabels;
    this.setChartData = chartData;
    this.setChartColor = chartColor;
  }

  setFont(setFont:any) {
    this.setFontSize = setFont
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
            setFontSize: this.setFontSize,
          },
        },
        animation: {
          animateScale: false,
          animateRotate: false,
        },
      },
    });
  }

}
