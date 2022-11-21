
import{ingredient}from'../shared/ingredient.model';
import { Subject } from 'rxjs';
export class shoppingListService{
  ingredientsChanged = new Subject<ingredient[]>() 
    private ingredients : ingredient[] =[
        
        new ingredient('',0),
        
      ];
      getIngredients(){
        return this.ingredients.slice() 
      }
      addIngredient(ingredient:ingredient){
        this.ingredients.push(ingredient)
        this.ingredientsChanged.next(this.ingredients.slice() )
      }
      addIngredients(ingredients:ingredient[]){
      //   for(let ingredient of ingredients){
      //     this.addIngredient(ingredient)
      //   }
     
        this.ingredients.push(...ingredients)
      this.ingredientsChanged.next(this.ingredients.slice())
}
}
