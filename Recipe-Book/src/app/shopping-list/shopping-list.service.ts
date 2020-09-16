import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Rice', 1),
        new Ingredient('Chicken', 1)
      ];

    getIngredients() {
          return this.ingredients.slice();
          // .slice() is used here, to return a copy of the `ingredients` array, 
          // instead of returning the actual array, which is kept private 
    }

    getIngredient(id: number) {
        return this.ingredients[id];
    }
    
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    editIngredient(id: number, newIngredient: Ingredient) {
        this.ingredients[id] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    
    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(id: number) {
        this.ingredients.splice(id, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}