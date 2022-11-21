import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import{ingredient}from'../shared/ingredient.model'
import { shoppingListService } from './shopppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients : ingredient[] 
   private igChangeSub: Subscription 
  ;
  constructor(private slService:shoppingListService) { }

  ngOnInit(): void {
    this.ingredients=this.slService.getIngredients()
    this.igChangeSub= this.slService.ingredientsChanged.subscribe(
      (ingredients:ingredient[])=>{
        this.ingredients=ingredients
      }
    )
  }
  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe()
  }

}
