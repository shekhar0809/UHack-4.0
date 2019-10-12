import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '/home/shekhar/Desktop/UHack-4.0/Admin-Website/src/canvasjs.min';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const dataPoints = [];
    let y = 0;
    for (let i = 0; i < 10000; i++) {
      y += Math.round(5 + Math.random() * (-5 - 5));
      dataPoints.push({ y: y });
    }
    const chart1 = new CanvasJS.Chart('chartContainer1', {
      zoomEnabled: true,
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'Garbade Collection stats demo - 10000 DataPoints'
      },
      subtitles: [{
        text: 'Try Zooming and Panning'
      }],
      data: [
        {
          type: 'line',
          dataPoints: dataPoints
        }]
    });

    chart1.render();


    const chart2 = new CanvasJS.Chart('chartContainer2', {
      theme: 'light1', // "light1", "ligh2", "dark1", "dark2"
      animationEnabled: true,
      title: {
        text: 'User Registration data'
      },
      axisY: {
        title: 'Amount (in USD)',
        prefix: '$',
        lineThickness: 0,
        suffix: 'k'
      },
      data: [{
        type: 'waterfall',
        indexLabel: '{y}',
        indexLabelFontColor: '#EEEEEE',
        indexLabelPlacement: 'inside',
        yValueFormatString: '#,##0k',
        dataPoints: [
          { label: 'Sales', y: 1273 },
          { label: 'Service', y: 623 },
          { label: 'Total Revenue', isIntermediateSum: true },
          { label: 'Research', y: -150 },
          { label: 'Marketing', y: -226 },
          { label: 'Salaries', y: -632 },
          { label: 'Operating Income', isCumulativeSum: true },
          { label: 'Taxes', y: -264 },
          { label: 'Net Income', isCumulativeSum: true }
        ]
      }]
    });
    chart2.render();
  }

}
