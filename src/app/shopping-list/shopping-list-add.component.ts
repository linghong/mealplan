import { Component, OnChanges, Input } from '@angular/core';
import { Ingredient } from '../shared/ingredient';
import { ShoppingListService } from  './shopping-list.service';

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})

export class ShoppingListAddComponent implements OnChanges {
 isAdd =true;
 @Input() item: Ingredient;

  constructor(private sls: ShoppingListService) { 
  }

  ngOnChanges(changes) {
  	if(changes.item.currentValue===null){
  		this.isAdd=true;
  	}else{
  		this.isAdd=false;
  	}
	
  }

  onSubmit(inputIngredient: Ingredient){
  	if(!this.isAdd){
  		
	 } else{
      this.item = new Ingredient(inputIngredient.name, inputIngredient.amount);
      this.sls.addItem(this.item);
   } 	
  }
}
