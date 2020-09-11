import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            'Dosa (with Sambhar)', 
            'A South Indian dish', 
            'https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa-500x500.jpg',
            [
                new Ingredient('Dosa', 2),
                new Ingredient('Sambhar', 1)
            ]),
        new Recipe(
            'Hyderabadi Chicken Biryani', 
            'A type of biryani from Hyderabad ', 
            'https://pachakam.com/wp-content/uploads/2019/07/Hyderabadi-Chicken-Biryani-Pachakam-2676.jpg',
            [
                new Ingredient('Rice', 1),
                new Ingredient('Chicken Pieces', 4)
            ])
      ];
    
    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();  
        // .slice() is used here, to return a copy of the `recipes` array, 
        // instead of returning the actual array, which is kept private 
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}