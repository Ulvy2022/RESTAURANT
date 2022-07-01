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


let minusOrder = [{name:"Koko",numberMinusOrder:3},
                            {name:"Coffee",numberMinusOrder:1},
                            {name:"KOI",numberMinusOrder:1},
        ]

let table = new Table();
table.addTableBooked(customers1.getTableSit());
table.addTableBooked(customers.getTableSit());

let hr  = new HR("Romy",25,14345,2000,"Manager",21423,"PP");

let cashier = new Cashier(customers1.foodOrder,2,4);

let staffs = new Staff("Jack",20,12345,1000,"Cahiser",223,"PP");
let staffs1 = new Staff("Vin",20,12345,1000,"Washes",213,"PP");
let staffs2 = new Staff("Tinfy",20,12345,1000,"Cahiser",123,"PP");
let staffs3 = new Staff("Cham",20,12345,1000,"Cahiser",22,"PP");

//add staff
hr.addStaff(staffs)
hr.addStaff(staffs1)
hr.addStaff(staffs2)
hr.addStaff(staffs3)

//Know the position of all of the staff in the restaurant-------------------------
// console.log(hr.getAllStaff());

//increaseSalary ----------------------------
            //salary of staff that we don't increase yet
// console.log(hr.getStaffBy(223));
            //salary of staff after we  increase 
// console.log(hr.increaseSalary(223,1500));
 
//CHANGE POSITION STAFFF------------------------------
// console.log(hr.getStaffBy(223));
// hr.changePositionStaffTO("Washes",223)
// console.log(hr.getStaffBy(223));

//count staff how many in restaurant
// console.log(hr.getNumberOFStaffBy("Cahiser"));


//RESIGN STAFF--------------------------------
//all staff before we minus some staff
// console.log(hr.getAllStaff());

//minus the staff that resign -----------------------------------
// hr.resignStaff(223);
        //all stafff after resign some staffs
// console.log(hr.getAllStaff());


//get staff by their ID or category or salary---------------------------
// console.log(hr.getStaffBy(223));

//find free table ---------------------------
// console.log(table.findFreeTable());
            //change table sit to another tabel-------------------------------
// table.changeTableSitTo(2,5)
// console.log(table.findFreeTable());


// get total price ---------------------------
// console.log(cashier.getTotalPrice(customers1.foodOrder,customers1.allDrinking));

//get total price of food ---------------------------
// console.log(cashier.getCustomerOrderFoodWithPrice(customers1.foodOrder));

//get total price of drinking ---------------------------
// console.log(cashier.getCustomerOrderDrinkingWithPrice(customers1.allDrinking));

//get customer order food and drink with price name numberOfOrder
// console.log(cashier.getCustomerOrderDrinkingWithPrice(customers1.allDrinking));
// console.log(cashier.getCustomerOrderFoodWithPrice(customers1.foodOrder));


//check customer payment method---------------------------
console.log(cashier.paymentBy("ABA",2));
console.log(cashier.paymentBy("ABA",4));

//get all customer that has payment with tableID
console.log(cashier.getAllCustomerAlreadyPaid());


