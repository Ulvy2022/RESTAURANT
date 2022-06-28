

export class Drinking{
    drinkingMenu:{Name:string,Price:number}[]=[
        {"Name":"KOI",Price:5},
        {"Name":"Coffee",Price:5},
        {"Name":"Tea",Price:5},
        {"Name":"Coca Cola",Price:5},
        {"Name":"PepSi",Price:5},
    ]

    getDrinkingMenu(){
        return this.drinkingMenu;
    } 

}