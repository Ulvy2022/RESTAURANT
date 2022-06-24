

export class FoodMenu{
    public food:[
        {name:"Koko",Price:5},
        {name:"Kare",Price:4},
        {name:"Chha Kdav",Price:7},
        {name:"Sgoar Jruk",Price:6},
        {name:"Tong Yam",Price:8},
        {name:"Chha Spei",Price:9},
        {name:"Trey Sweet",Price:15},
    ]

    getPrice(foodName:string):number{
        let price:number=0;
        for (let value of this.food){
            if(value.name === foodName){
                price=value.Price
            
            }
        }
        return price;
    }

    getAllFood(){
        return this.food;
    }
}