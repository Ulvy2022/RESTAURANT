

export class FoodMenu{
    public food:{"Name":string,"Price":number}[]=[
        {"Name":"Koko",Price:5},
        {"Name":"Kare",Price:4},
        {"Name":"Chha Kdav",Price:7},
        {"Name":"Sgoar Jruk",Price:6},
        {"Name":"Tong Yam",Price:8},
        {"Name":"Chha Spei",Price:9},
        {"Name":"Trey Sweet",Price:15},
    ];

    getPrice(foodName:string):number{
        let price:number=0;
        for (let value of this.food){
            if(value.Name === foodName){
                price=value.Price
            
            }
        }
        return price;
    }

    getAllFood(){
        
        return this.food;
    }
}