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

    changeTableSitTo(odlId:number,id:number){
        let table = new Table();
        if(table.hasCustomerOnTable(id)=="No customers" && table.getTableBooked().indexOf(id) != -1){
           
            table.addTableBooked(4);
             return "Your change was successful!";
        }
        return "Sorry that table is already booked;"
    }

    getCustomerOrderByTableID(id:number){
        return this.getCustomerOrderFood()+"\n"+this.getCustomerOrderDrinking();
    }
    

}