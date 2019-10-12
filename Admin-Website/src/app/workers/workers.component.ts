import { Component, OnInit } from '@angular/core';
import { ProfileLinkService } from '../profile-link.service';
import { Router } from '@angular/router';


export interface Worker {
  userId: number;
  name: string;
  weight: number;
  creditScore: number;
}

// fetch user data from firebase

const ELEMENT_DATA: Worker[] = [
  { userId: 1, name: 'firstName', weight: 1.0079, creditScore: 100 },
  { userId: 2, name: 'firstName', weight: 4.0026, creditScore: 500 },
  { userId: 3, name: 'firstName', weight: 6.941, creditScore: 250 },
  { userId: 4, name: 'firstName', weight: 9.0122, creditScore: 30 },
  { userId: 5, name: 'firstName', weight: 10.811, creditScore: 4 },
  { userId: 6, name: 'firstName', weight: 12.0107, creditScore: 970 },
  { userId: 7, name: 'firstName', weight: 14.0067, creditScore: 100 },
  { userId: 8, name: 'firstName', weight: 15.9994, creditScore: 70 },
  { userId: 9, name: 'firstName', weight: 18.9984, creditScore: 460 },
  { userId: 10, name: 'firstName', weight: 20.1797, creditScore: 0 },
];


@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {

  displayedColumns: string[] = ['userId', 'name', 'weight', 'creditScore' , 'link'];
  dataSource = ELEMENT_DATA;

  constructor(
    private getProfile: ProfileLinkService,
    private router: Router

  ) { }

  ngOnInit() {
  }

  OpenLink(element: Worker) {
    this.getProfile.getWorker(element);
    const tempWorker: Worker = element;
    const uid = tempWorker.userId;
    this.router.navigate( ['workers/', uid]);
  }
}
