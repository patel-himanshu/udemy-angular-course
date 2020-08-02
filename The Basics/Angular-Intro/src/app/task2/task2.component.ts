import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {
  username: string = '';
  displayDetails = false;
  logs = [];

  constructor() { }

  ngOnInit(): void {
  }

  resetUsername() {
    this.username = '';
  }

  onClickDisplayDetails() {
    this.displayDetails = !this.displayDetails;
    this.logs.push(new Date());
  }
}
