import { Table } from './Table';
//import food  Menu class 
import {FoodMenu} from "../FOOD/FoodMenu"

//import drinking class 
import {Drinking} from "../DRINKING/DrinkingCategory"


export class Customer{

    constructor(
        public foodOrder:{Name:string,NumberOfOrder:number}[]=[],
        public tableSitID: number,
        public numberOfCustomer:number,
        public allDrinking:{Name:string,NumberOfOrder:number}[]=[]

    ){}

    getCustomerOrderFood():string{
        let result = "";
        for (let value of this.foodOrder){
            result += "Name :"+value.Name+"; NumberOfOrder :"+value.NumberOfOrder+"\n"
        }
        return result;
    }

    getCustomerOrderDrinking():string{
        let result = "";
        for (let value of this.allDrinking){
            result += "Name :"+value.Name+"; NumberOfOrder :"+value.NumberOfOrder+"\n"
        }
        return result;
    }

    getTableSit(){
        return this.tableSitID;
    }

    getNumberOfCustomer(){
        return this.numberOfCustomer;
    }

    changeTableSitTo(id:number){
        let table = new Table();
        if(table.hasCustomerOnTable(id)===false){
            return this.tableSitID = id;
        }
    }

    getCustomerOrderByTableID(id:number){
        return this.getCustomerOrderFood()+"\n"+this.getCustomerOrderDrinking();
    }
    

}