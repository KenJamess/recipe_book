import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  selectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(1, 'Vietnamese Food', 'Must Try!', 'https://iloveasiatour.com/wp-content/uploads/2019/01/Vietnamese-daily-meal1.jpg'),
    new Recipe(2, 'Chinese Food', 'Delicious', 'https://www.englishclub.com/images/vocabulary/food/chinese/chinese-food.jpg'),
    new Recipe(3, 'Indian Food', 'Best Seller', 'https://haiphongtours.com/wp-content/uploads/2020/09/Best-Indian-food-restaurant-in-Hai-Phong-city-2.jpg')
  ];

  constructor() {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}
