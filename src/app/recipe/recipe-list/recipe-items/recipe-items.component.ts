import { Component, OnInit,Input } from '@angular/core';
import { recipeService } from '../../recipe.service';
import{recipe}from'../../recipes.model';
@Component({
  selector: 'app-recipe-items',
  templateUrl: './recipe-items.component.html',
  styleUrls: ['./recipe-items.component.css']
})
export class RecipeItemsComponent implements OnInit {
  @Input() recipe:recipe
  @Input() index:number

  ngOnInit(): void {
  }
  
}
