import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import{ingredient}from '../../shared/ingredient.model'
import { shoppingListService } from '../shopppingList.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild ('nameInput') nameInputRef:ElementRef
  @ViewChild ('amountInput') amountInputRef:ElementRef
  
  constructor(private slService:shoppingListService ) { }

  ngOnInit(): void {
  }
  onAddItem(){
    const ingname=this.nameInputRef.nativeElement.value
    const ingamount=this.amountInputRef.nativeElement.value
    const newIngredient= new ingredient(ingname,ingamount)
   this.slService.addIngredient(newIngredient)
  }


}
