

//import information relate to customers
import {Customer} from "././CUSTOMERS/Customer";
import {Cashier} from "././STAFF/Cashier";
import {Table} from "././CUSTOMERS/Table";

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
]
let customers = new Customer(customersOrderFood,2,5,customersOrderDrinking);
// console.log(customers.getCustomerOrderByTableID(2));

let customers1 = new Customer(customersOrderFood,4,5,customersOrderDrinking);

let table = new Table();
// table.addTableBooked(2)

console.log(table.hasCustomerOnTable(2));

// let cashiw = new Cashier();
// console.log(cashiw.getTotalPriceOfFood(customersOrderFood));

console.log(customers1.changeTableSitTo(7,3));

console.log(table.getTableBooked());

