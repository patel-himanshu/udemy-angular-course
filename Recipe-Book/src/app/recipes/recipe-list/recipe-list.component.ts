import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Dosa (with Sambhar)', 'A South Indian dish', 'https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa-500x500.jpg'),
    new Recipe('Hyderabadi Chicken Biryani', 'A variety of biryani from Hyderabad ', 'https://pachakam.com/wp-content/uploads/2019/07/Hyderabadi-Chicken-Biryani-Pachakam-2676.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
