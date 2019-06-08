import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import {map, tap} from 'rxjs/operators';

@Injectable()
export class DataStorageService {

    constructor(private http: HttpClient, private recipeService: RecipeService) {}

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://ng-course-recipebook-9ccc3.firebaseio.com/recipes.json', recipes).subscribe(
            (response) => {
                console.log(response);
            }
        );
    }

    fetchRecipes() {
        return this.http.get<Recipe[]>('https://ng-course-recipebook-9ccc3.firebaseio.com/recipes.json').pipe(
            map((recipes: Recipe[], index: number) => {
                return recipes.map((value, index, array) => {
                    return {...value, ingredients: value.ingredients ? value.ingredients : []};
                });
            }),
            tap((response) => {
                this.recipeService.setRecipes(response);
            })
        );
    }
}