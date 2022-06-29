

//import information relate to customers
import {Customer} from "././CUSTOMERS/Customer";
import {Table} from "././CUSTOMERS/Table";
import {Cashier} from "./STAFF/Cashier";

//import ENUM class
import {Gender} from "././ENUM/GENDER";
import {StaffCategory} from "././ENUM/StaffCategory";
import {Food} from "././FOOD CATEGORY/Food"; 

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
customers1.orderMoreDrinking(customersOrderDrinking1);
let cashier = new Cashier(customersOrderFood,3,5,customersOrderDrinking);
cashier.getTotalPriceOfDrinking(customersOrderDrinking1);
cashier.getTotalPriceOfDrinking(customersOrderDrinking);
console.log(cashier.getTableSited());
console.log(cashier.getCustomerOrderDrinkingWithPrice());
console.log(cashier.getCustomerOrderFoodWithPrice());
console.log(cashier.getTotalPrice());
console.log(cashier.paymentBy("ABA"));

let table = new Table();
table.addTableBooked(customers1.getTableSit());
table.addTableBooked(customers.getTableSit());



 