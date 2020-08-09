import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe-Book';
  currOption: string = 'recipes'; 

  onNavigate(option: string) {
    this.currOption = option;  
  }
}
