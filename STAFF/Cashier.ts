//import food  Menu class 
import {FoodMenu} from "../FOOD CATEGORY/FoodMenu";

//import drinking class 
import {Drinking} from "../FOOD CATEGORY/DrinkingCategory";

// import customer class 
import {Customer} from "../CUSTOMERS/Customer";

// global variables fro get total price for
let totalPrice:number = 0;


export class Cashier{

    public method:{"Name":string,"AccountID":number}[]=[
        {"Name":"ABA","AccountID":1234567},
        {"Name":"ACELEDA","AccountID":3648334},
        {"Name":"WING","AccountID":43532823},
        {"Name":"Cash","AccountID":0o0}
    ]
    getAllMethod(){

        return this.method;
    };

    paymentBy(name:string):string{
         let ifMatchPayment ="Sorry we don't have "+name+" account!";
         for (let value of this.method){ 
            if(value.Name === name){
                ifMatchPayment = "Your payment was successfully thanks you >3";
            }
         }
         return ifMatchPayment;
    }


    getTotalPriceOfFood(allFood:{Name:string,NumberOfOrder:number}[]):number {

        let food = new FoodMenu();
        let price:number=0;
        for (let foodName of allFood){
                for (let value of food.getAllFood()){
                    if (foodName.Name === value.Name){
                        price += value.Price * foodName.NumberOfOrder;
                    }
                }
        }
        totalPrice += price;
        return price ;
    }


    getTotalPriceOfDrinking(allDrinking:{Name:string,NumberOfOrder:number}[]):number {
        let drinking = new Drinking();
        let price:number=0;
        for (let drinkingName of allDrinking){
                for (let value of drinking.getDrinkingMenu()){
                    if (drinkingName.Name === value.Name){
                        price += value.Price * drinkingName.NumberOfOrder;
                    }
                }
        }
        totalPrice += price;
        return  price ;
    }

    getTotalPrice(){
        return totalPrice;
    }



}