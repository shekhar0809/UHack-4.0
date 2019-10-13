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

    // daily garbage dump

    const dataPoints = [];
    let y = 0;
    for (let i = 0; i < 10000; i++) {
      y += Math.round(5 + Math.abs(Math.random()) * (-5 - 5));
      dataPoints.push({ y: Math.abs(y) });
    }
    const chart1 = new CanvasJS.Chart('chartContainer1', {
      zoomEnabled: true,
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'Garbage Dump stats demo'
      },
      subtitles: [{
        text: 'Try Zooming and Panning'
      }],
      data: [
        {
          type: 'line',
          dataPoints
        }]
    });

    chart1.render();

    // garbage categories

    const chart4 = new CanvasJS.Chart('chartContainer4', {
      theme: 'light2', // "light1", "light2", "dark1", "dark2"
      exportEnabled: true,
      animationEnabled: true,
      title: {
        text: 'Waste Segregation'
      },
      data: [{
        type: 'pie',
        startAngle: 25,
        toolTipContent: '<b>{label}</b>: {y}%',
        showInLegend: 'true',
        legendText: '{label}',
        indexLabelFontSize: 16,
        indexLabel: '{label} - {y}%',
        dataPoints: [
          { y: 51.08, label: 'Bio-degradable' },
          { y: 27.34, label: 'Plastic' },
          { y: 10.62, label: 'Metal' },
          { y: 15.02, label: 'Paper' },
          { y: 4.07, label: 'e-waste' },
          { y: 0.44, label: 'Others' }
        ]
      }]
    });
    chart4.render();

  }
}


