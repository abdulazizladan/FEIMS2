import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {

  activityData = [{
    month: 'January',
    spent: 240,
    opened: 8,
    closed: 30
  }, {
    month: 'February',
    spent: 140,
    opened: 6,
    closed: 20
  }, {
    month: 'March',
    spent: 220,
    opened: 10,
    closed: 20
  }, {
    month: 'April',
    spent: 440,
    opened: 40,
    closed: 60
  }, {
    month: 'May',
    spent: 340,
    opened: 40,
    closed: 60
  }];

  tasks = [{
    text: 'Check main gate status.',
    status: 0
  }, {
    text: 'Check building 001 windows.',
    status: 1
  }]

  tickets = [{
    img: 'assets/images/face-5.jpg',
    name: 'Chioma Okonkwo',
    text: 'My dashboard is not working.',
    date: new Date('07/7/2021'),
    isOpen: false
  },
  {
    img: 'assets/images/face-5.jpg',
    name: 'Moses Isibor',
    text: 'Payment confirmation.',
    date: new Date('04/10/2020'),
    isOpen: false
  }]

  photos = [{
    name: 'Photo 1',
    url: 'assets/images/sq-15.jpg'
  }, {
    name: 'Photo 2',
    url: 'assets/images/sq-8.jpg'
  }, {
    name: 'Photo 3',
    url: 'assets/images/sq-9.jpg'
  }]

  constructor() { }

  ngOnInit(): void {
  }
  
}
