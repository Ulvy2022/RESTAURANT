//import food  Menu class 
import {FoodMenu} from "../FOOD CATEGORY/FoodMenu";

//import drinking class 
import {Drinking} from "../FOOD CATEGORY/DrinkingCategory";

// import customer class 
import {Customer} from "../CUSTOMERS/Customer";


let totalPrice:number = 0;


export class Cashier extends Customer{

    public method:{"Name":string,"AccountID":number}[]=[
        {"Name":"ABA","AccountID":1234567},
        {"Name":"ACELEDA","AccountID":3648334},
        {"Name":"WING","AccountID":43532823},
        {"Name":"Cash","AccountID":0o0}
    ]
    public listOfPaid:number[]=[]

     getAllMethod(){

        return this.method;
    };

    getAllCustomerAlreadyPaid(){
        let result ="The customer already paid set on tableID: \n";
        for (let value of this.listOfPaid){
            result += "table ID : "+value.toString()+"\n";
        }
        return result;
    }



    paymentBy(name:string,tableID:number){
         let ifMatchPayment ="Sorry we don't have "+name+" account!";
         for (let value of this.method){ 
            if(value.Name === name  && tableID<=16){
                this.listOfPaid.push(tableID);
                // ifMatchPayment = "Table ID "+this.getTableSit()+" already paid by "+name;
            }
         }
         return ifMatchPayment;
    }

  

    getTotalPriceOfFood(allFood:{Name:string,NumberOfOrder:number}[]):number {
        // let totalPrice:number = 0;
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
        // let totalPrice:number = 0;
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

    getTotalPrice(food:{Name:string,NumberOfOrder:number}[],drinking:{Name:string,NumberOfOrder:number}[]){
      
        this.getTotalPriceOfDrinking(drinking);
        this.getTotalPriceOfFood(food);
        return "Total price : " +totalPrice+" dollars";
    }

    getCustomerOrderDrinkingWithPrice(drinking:{Name:string,NumberOfOrder:number}[]){
        let result = "              Drinking customer has ordered: \n";
        let drinkingList = new Drinking();
        
        for (let value of drinkingList.getDrinkingMenu()){
            for (let drink of drinking){
                if(drink.Name == value.Name){

                    result += "Name :"+drink.Name+"; NumberOfOrder :"+drink.NumberOfOrder+"  ; Price : "+value.Price*drink.NumberOfOrder+" dollars"+"\n";
                }
            }

        }
        return result;
    }

    getCustomerOrderFoodWithPrice(foods:{Name:string,NumberOfOrder:number}[]){
        let result = "              Food customer has ordered: \n";
        let food = new FoodMenu();
        
        for (let value of food.getAllFood()){
            for (let food of foods){
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


    getCustomerOrderByTableID(id:number){
        if(id<=16){
            if(this.tableSitID == id && this.foodOrder.length>0 && this.allDrinking.length>0){
                return this.foodOrder,this.allDrinking;
            }else if (this.tableSitID == id || this.foodOrder.length<0 || this.allDrinking.length<0){
                return "This tableID is have no customer!"
            }
        }
        else if(id>16){
            return "Sorry tableID not found!";
        }
        
    }

   

}