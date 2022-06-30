"use strict";
exports.__esModule = true;
var HR_1 = require("./HR/HR");
//import information relate to customers
var Customer_1 = require("././CUSTOMERS/Customer");
var Table_1 = require("././CUSTOMERS/Table");
var Cashier_1 = require("./STAFF/Cashier");
//import staff class
var Staff_1 = require("././STAFF/Staff");
var customersOrderFood = [
    { "Name": "Koko", NumberOfOrder: 5 },
    { "Name": "Kare", NumberOfOrder: 4 },
    { "Name": "Chha Kdav", NumberOfOrder: 7 }
];
var customersOrderFood1 = [
    { "Name": "Koko", NumberOfOrder: 6 },
    { "Name": "Kare", NumberOfOrder: 7 },
    { "Name": "Chha Kdav", NumberOfOrder: 7 }
];
var customersOrderDrinking = [
    { "Name": "KOI", NumberOfOrder: 1 },
    { "Name": "Coffee", NumberOfOrder: 1 },
    { "Name": "Tea", NumberOfOrder: 1 },
];
var customersOrderDrinking1 = [
    { "Name": "KOI", NumberOfOrder: 1 },
    { "Name": "Coffee", NumberOfOrder: 1 },
    { "Name": "Tea", NumberOfOrder: 1 },
];
var cancelFood = [
    { "Name": "Koko", NumberMinusOrder: 1 },
    { "Name": "Kare", NumberMinusOrder: 1 },
    { "Name": "Chha Kdav", NumberMinusOrder: 1 },
];
var customers = new Customer_1.Customer(customersOrderFood, 2, 5, customersOrderDrinking);
var customers1 = new Customer_1.Customer(customersOrderFood, 4, 5, customersOrderDrinking);
customers1.orderMoreFood(customersOrderFood1);
console.log(customers1.getCustomerOrderFood());
customers1.minusOrderFood(cancelFood);
customers1.cancelOrderFood(["koko", "kare"]);
console.log(customers1.getCustomerOrderFood());
var cashier = new Cashier_1.Cashier(customersOrderFood, 3, 5, customersOrderDrinking);
// console.log(customers.getAllOrderList());
var minusOrder = [{ name: "Koko", numberMinusOrder: 3 },
    { name: "Coffee", numberMinusOrder: 1 },
    { name: "KOI", numberMinusOrder: 1 },
];
var table = new Table_1.Table();
table.addTableBooked(customers1.getTableSit());
table.addTableBooked(customers.getTableSit());
var human = new HR_1.HR("Romy", 25, 14345, 2000, "Manager", 21423, "PP");
var staffs = new Staff_1.Staff("Ulvy", 20, 12345, 1000, "Cahiser", 223, "PP");
var staffs1 = new Staff_1.Staff("Sopha", 20, 12345, 1000, "Washes", 213, "PP");
var staffs2 = new Staff_1.Staff("Vy", 20, 12345, 1000, "Cahiser", 123, "PP");
human.addStaff(staffs);
human.addStaff(staffs1);
human.addStaff(staffs2);
// human.increaseSalary(223,1500);
// console.log(human.getStaffBy(223));
// human.increaseSalary(223,1500);
// console.log(human.getStaffBy(223));
