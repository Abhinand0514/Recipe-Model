import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { recipeService } from '../recipe.service';
import{recipe}from'../recipes.model'
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
   recipe:recipe
   id:number
  constructor(private recieService:recipeService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=+params['id']
        this.recipe=this.recieService.getRecipes(this.id)
      }
    );
  }
  onAddToShoppingList(){
    this.recieService.addIngredientsToShoppingList(this.recipe.ingredients)
  }
  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo: this.route})
  }
}
