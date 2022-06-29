//import food  Menu class 
import {FoodMenu} from "../FOOD CATEGORY/FoodMenu";

//import drinking class 
import {Drinking} from "../FOOD CATEGORY/DrinkingCategory";

// import customer class 
import {Customer} from "../CUSTOMERS/Customer";





export class Cashier extends Customer{

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
                ifMatchPayment = "Table ID "+this.getTableSit()+" already paid thanks you >3 ";
            }
         }
         return ifMatchPayment;
    }


    getTotalPriceOfFood(allFood:{Name:string,NumberOfOrder:number}[]):number {
        let totalPrice:number = 0;
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
        let totalPrice:number = 0;
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
        let totalPrice:number = 0;
        let drinkingList = new Drinking();
        let food = new FoodMenu();
        for (let value of drinkingList.getDrinkingMenu()){
            for (let drink of this.getCustomerOrderDrinking()){
                if(drink.Name == value.Name){
                    totalPrice += value.Price*drink.NumberOfOrder
                }

            }
        }

        for (let value of food.getAllFood()){
            for (let f of this.foodOrder){
                if(f.Name == value.Name){
                    totalPrice += value.Price*f.NumberOfOrder
                }

            }
        }
        return "Total price :" +totalPrice+" dollars";
    }

    getCustomerOrderDrinkingWithPrice(){
        let result = "              Drinking customer has ordered: \n";
        let drinkingList = new Drinking();
        
        for (let value of drinkingList.getDrinkingMenu()){
            for (let drink of this.getCustomerOrderDrinking()){
                if(drink.Name == value.Name){

                    result += "Name :"+drink.Name+"; NumberOfOrder :"+drink.NumberOfOrder+"  ; Price : "+value.Price*drink.NumberOfOrder+" dollars"+"\n";
                }
            }

        }
        return result;
    }

    getCustomerOrderFoodWithPrice(){
        let result = "              Food customer has ordered: \n";
        let food = new FoodMenu();
        
        for (let value of food.getAllFood()){
            for (let food of this.foodOrder){
                if(food.Name == value.Name){

                    result += "Name :"+food.Name+"; NumberOfOrder :"+food.NumberOfOrder+"  ; Price : "+value.Price*food.NumberOfOrder+" dollars"+"\n";
                }
            }

        }
        return result;
    }

        getTableSited(){
            return "Customer sit on table "+ this.getTableSit()
        }
}