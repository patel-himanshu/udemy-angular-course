import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() numberIncrement = new EventEmitter<number>();
  incrementVar: any;
  currNumber: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  startGame() {
    this.incrementVar = setInterval(() => {
      this.currNumber++;
      this.numberIncrement.emit(this.currNumber);
    }, 1000);
  }

  stopGame() {
    clearInterval(this.incrementVar);
    this.currNumber = 0;
  }
}
