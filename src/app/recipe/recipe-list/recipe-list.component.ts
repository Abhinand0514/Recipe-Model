import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { recipeService } from '../recipe.service';
import {recipe} from'../recipes.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipe: recipe[]
  constructor(private recipeService:recipeService,private router:Router,private route:ActivatedRoute ) { }//to inform about the current route

  ngOnInit(){
    this.recipe=this.recipeService.getRecipe()
  }
  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route}) //to inform about the current route
  }
  
  
}
