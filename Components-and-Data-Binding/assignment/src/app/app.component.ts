import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  onNumberIncrement(numberNow: number) {
    // console.log(numberNow);
    if (numberNow % 2 === 1) {
      this.oddNumbers.push(numberNow);
    } 
    else {
      this.evenNumbers.push(numberNow);
    }
    // console.log('Odd Numbers: ', this.oddNumbers);
    // console.log('Even Numbers: ', this.evenNumbers);
  }
}
