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
    // Chart.defaults.font.size = 16;
    let count_sex = new Chart('countSex', {
      type: 'pie',
      data: {
        labels: ['ชาย', 'หญิง'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19],
            backgroundColor: [
              'rgba(54, 162, 235, 0.9)',
              'rgba(255, 99, 132, 0.9)'
              
            ],
            borderColor: [ 'rgba(54, 162, 235, 1)','rgba(255,99,132,1)'],
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
          labels:{
            fontSize:20
          }
        },
        animation: {
          animateScale: true,
          animateRotate: true,
        },
      },
    });
  }
}
