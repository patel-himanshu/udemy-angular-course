import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe_ri: Recipe;
  @Output() selectedRecipe_ri = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectRecipe() {
    this.selectedRecipe_ri.emit();
  }
}