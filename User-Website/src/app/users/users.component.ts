import { Component, OnInit } from '@angular/core';

export interface User {
  userId: number;
  name: string;
  weight: number;
  creditScore: number;
}

// fetch user data from firebase

const ELEMENT_DATA: User[] = [
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
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['userId', 'name', 'weight', 'creditScore'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
