import { Table } from './Table';
//import food  Menu class 
import {FoodMenu} from "../FOOD CATEGORY/FoodMenu"

//import drinking class 
import {Drinking} from "../FOOD CATEGORY/DrinkingCategory"


export class Customer{

    constructor(
        public foodOrder:{Name:string,NumberOfOrder:number}[]=[],
        public tableSitID:number,
        public numberOfCustomer:number,
        public allDrinking:{Name:string,NumberOfOrder:number}[]=[],

    ){}

    getCustomerOrderFood(){
        
        return this.foodOrder;
    }


    getCustomerOrderDrinking(){
      
        return this.allDrinking;
    }


    getNumberOfCustomer(){
        return this.numberOfCustomer;
    } 
    
    cancelOrderFood(name:string[]){
        for (let value of name){
            for (let food=0; food<this.foodOrder.length; food++){
                if(this.foodOrder[food].Name==value){
                    this.foodOrder.splice(food,1);
                
                }
            }
        }
    }

    cancelOrderDrinking(name:string[]){
        for (let value of name){
            for (let drink=0; drink<this.allDrinking.length; drink++){
                if(this.allDrinking[drink].Name==value){
                    this.allDrinking.splice(drink,1);
                
                }
            }
        }
    }

    orderMoreFood(foods:{Name:string,NumberOfOrder:number}[]){
        for (let food of foods){
            this.allDrinking.push(food);
        }
    }

    orderMoreDrinking(drinking:{Name:string,NumberOfOrder:number}[]){
        for (let value of drinking){
            this.allDrinking.push(value);
        }
    }

    minusOrderFood(minus:{name:string,numberMinusOrder:number}[]){
        for(let value of this.foodOrder){
            for(let mi of minus){
                if(mi.name === value.Name){
                    value.NumberOfOrder -= mi.numberMinusOrder;
                }
            }
        }

        
    }

    minusOrderDrink(minus:{name:string,numberMinusOrder:number}[]){
        for(let value of minus){
            for(let drink of this.allDrinking){
                if(drink.Name === value.name){
                    drink.NumberOfOrder -= value.numberMinusOrder;
                }
            }
        }
    }

 
    getTableSit(){
        return this.tableSitID;
    }
    
}