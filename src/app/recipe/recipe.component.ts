import { Component, OnInit } from '@angular/core';

import { recipeService } from './recipe.service';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers:[recipeService]
})
export class RecipeComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
    
  
  }

}
