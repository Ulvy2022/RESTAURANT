import { HR } from './HR/HR';


//import information relate to customers
import {Customer} from "././CUSTOMERS/Customer";
import {Table} from "././CUSTOMERS/Table";
import {Cashier} from "./STAFF/Cashier";

//import ENUM class
import {Gender} from "././ENUM/GENDER";
import {StaffCategory} from "././ENUM/StaffCategory";

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

let customersOrderFood1 = [
    {"Name":"Koko",NumberOfOrder:6},
    {"Name":"Kare",NumberOfOrder:7},
    {"Name":"Chha Kdav",NumberOfOrder:7}
];
 
let customersOrderDrinking = [
    {"Name":"KOI",NumberOfOrder:1},
    {"Name":"Coffee",NumberOfOrder:1},
    {"Name":"Tea",NumberOfOrder:1},
];
let customersOrderDrinking1 = [
    {"Name":"KOI",NumberOfOrder:1},
    {"Name":"Coffee",NumberOfOrder:1},
    {"Name":"Tea",NumberOfOrder:1},
];

let cancelFood = [
    {"Name":"Koko",NumberMinusOrder:1},
    {"Name":"Kare",NumberMinusOrder:1},
    {"Name":"Chha Kdav",NumberMinusOrder:1},
]

let customers = new Customer(customersOrderFood,2,5,customersOrderDrinking);
let customers1 = new Customer(customersOrderFood,4,5,customersOrderDrinking);
customers1.orderMoreFood(customersOrderFood1);

console.log(customers1.getCustomerOrderFood());
customers1.minusOrderFood(cancelFood)
customers1.cancelOrderFood(["koko","kare"])
console.log(customers1.getCustomerOrderFood());


let cashier = new Cashier(customersOrderFood,3,5,customersOrderDrinking);

// console.log(customers.getAllOrderList());
let minusOrder = [{name:"Koko",numberMinusOrder:3},
                            {name:"Coffee",numberMinusOrder:1},
                            {name:"KOI",numberMinusOrder:1},
        ]

let table = new Table();
table.addTableBooked(customers1.getTableSit());
table.addTableBooked(customers.getTableSit());

let human  = new HR("Romy",25,14345,2000,"Manager",21423,"PP");

let staffs = new Staff("Ulvy",20,12345,1000,"Cahiser",223,"PP");
let staffs1 = new Staff("Sopha",20,12345,1000,"Washes",213,"PP");
let staffs2 = new Staff("Vy",20,12345,1000,"Cahiser",123,"PP");
human.addStaff(staffs)
human.addStaff(staffs1)
human.addStaff(staffs2)
// human.increaseSalary(223,1500);
// console.log(human.getStaffBy(223));
// human.increaseSalary(223,1500);
// console.log(human.getStaffBy(223));



