import { Table } from './Table';
//import food  Menu class 
import {FoodMenu} from "../FOOD CATEGORY/FoodMenu"

//import drinking class 
import {Drinking} from "../FOOD CATEGORY/DrinkingCategory"


export class Customer{

    constructor(
        public foodOrder:{Name:string,NumberOfOrder:number}[]=[],
        public tableSitID: number,
        public numberOfCustomer:number,
        public allDrinking:{Name:string,NumberOfOrder:number}[]=[],

    ){}

    getCustomerOrderFood(){
    
        return this.foodOrder;
    }


    getCustomerOrderDrinking(){
      
        return this.allDrinking;
    }

    getTableSit(){
        return this.tableSitID;
    }

    getNumberOfCustomer(){
        return this.numberOfCustomer;
    }


    getCustomerOrderByTableID(id:number){
        return this.getCustomerOrderFood()+"\n"+this.getCustomerOrderDrinking();
    }
    
    cancelOrderFood(name:string){
        for (let food=0; food<this.foodOrder.length; food++){
            if(this.foodOrder[food].Name==name){
                this.foodOrder.splice(food,1);
            
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

    getAllCustomersOrder(){
        return this.getCustomerOrderDrinking() +"\n" +this.getCustomerOrderFood();
    }

    
}