
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
         this.tableBooked.push(id)
    }

    getTableBooked(){
        return this.tableBooked;
    }

    findFreeTable(){
        let freeTable:number[]=[]
        for (let value of this.getAlltable()){
            if(this.getTableBooked().indexOf(value)== -1){
                freeTable.push(value);
            }
        }
        let result = "ALl free tables are: \n";
        for (let id of freeTable){
            result += "table ID : "+ id.toString()+"\n"
        }
        return result;
    }

    setTableTo(oldID:number,newID:number){
        for (let id=0;id<this.tableBooked.length; id++){
            if(this.tableBooked[id] == oldID){
                this.tableBooked[id] = newID;
            }
        }
        return "Succes updated"
    }

    changeTableSitTo(oldID:number,newID:number){
        let table = new Table();
        if(oldID == newID){
            return "Your new table ID can't be the same as the old one ):"
        }
        else if(newID<=16 ){
            
            for (let id=0;id<this.tableBooked.length; id++){
                if(this.tableBooked[id] == oldID){
                    this.tableBooked[id] = newID;
                }
            }
            return "Sorry that table is already booked :("
        }
        return "Your tablID doesn't exist ):"
    }
}