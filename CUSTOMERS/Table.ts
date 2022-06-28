import {Customer} from "../CUSTOMERS/Customer";

export class Table{
     allTable:number[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
     tableBooked:number[]=[];
     numberOFChair:number=5;
   

    getAlltable(){
        return this.allTable;
    }


    hasCustomerOnTable(id:number):string{
        if(id <= this.allTable[this.allTable.length - 1]){
            if(this.tableBooked.indexOf(id)  == -1){
                this.addTableBooked(id);
                return "No customers";
            }
        }
        return "has customers";
    }

    addTableBooked(id:number){
        return this.tableBooked.push(id)
    }

    getTableBooked(){
        return this.tableBooked;
    }

    findFreeTable(){
        let freeTable:number[]=[]
        for (let value of this.getTableBooked()){
            if(this.getAlltable().indexOf(value)== -1){
                freeTable.push(value);
            }
        }
    }
}