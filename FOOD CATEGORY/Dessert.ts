

export class Dessert{
    allDessert:{Name:string,Price:number}[]=[
        {Name:"Apple Pie",Price:5},
        {Name:"Coconut Kheer",Price:5},
        {Name:"Almond Malai Kulfi",Price:5},
        {Name:"Lemon Tart",Price:5},
        {Name:"Pistachio Phirni",Price:5},
    ];


    getPrice(dessertName:string):number{
        let price:number=0;
        for (let value of this.allDessert){
            if(value.Name === dessertName){
                price=value.Price
            
            }
        }
        return price;
    }

    getAllFood(){
        
        return this.allDessert;
    }
}