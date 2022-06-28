import {Customer} from "../CUSTOMERS/Customer";

export class Table{
     allTable:number[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
     numberOFChair:number=5;
   

    getAlltable(){
        return this.allTable;
    }


    hasCustomerOnTable(id:number):boolean{
        for (let value of this.allTable){
            if(value === id){
                return true;
            }
        }
        return false;
    }
}