
//import restaurant class
import {Restaurant} from "././RESTAURANT/Restaurant";

//import staff class
import {Staff} from "././STAFF/Staff";

//import manager information
import {Manager} from "././STAFF/Manager";


let customersOrderFood = [
    {"Name":"Koko",NumberOfOrder:5},
    {"Name":"Kare",NumberOfOrder:4},
    {"Name":"Chha Kdav",NumberOfOrder:7}
];
 
let customersOrderDrinking = [
    {"Name":"KOI",NumberOfOrder:1},
    {"Name":"Coffee",NumberOfOrder:1},
    {"Name":"Tea",NumberOfOrder:1},
];

let customersOrderDrinking1 = [
    {"Name":"KOI",NumberOfOrder:7},
    {"Name":"Coffee",NumberOfOrder:1},
    {"Name":"Tea",NumberOfOrder:1},
]

let customers = new Customer(customersOrderFood,2,5,customersOrderDrinking);
// console.log(customers.getCustomerOrderByTableID(2));
let customers1 = new Customer(customersOrderFood,4,5,customersOrderDrinking);
customers.addToorderedList()
customers1.orderMoreFood(customersOrderFood)

let cashier = new Cashier(customersOrderFood,3,5,customersOrderDrinking);

cashier.getTotalPriceOfDrinking(customersOrderDrinking1);
cashier.getTotalPriceOfDrinking(customersOrderDrinking);
