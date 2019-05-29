import { Ingredient } from './ingredient.model';
export class Recipe {
  public name: string;
  public description: string;
  public ingredients: Ingredient[];
  public imagePath: string;

  constructor(name: string, description: string, imagePath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }


}
