"use strict";
exports.__esModule = true;
//import information relate to customers
var Customer_1 = require("././CUSTOMERS/Customer");
var Table_1 = require("././CUSTOMERS/Table");
var Cashier_1 = require("./STAFF/Cashier");
var customersOrderFood = [
    { "Name": "Koko", NumberOfOrder: 5 },
    { "Name": "Kare", NumberOfOrder: 4 },
    { "Name": "Chha Kdav", NumberOfOrder: 7 }
];
var customersOrderDrinking = [
    { "Name": "KOI", NumberOfOrder: 1 },
    { "Name": "Coffee", NumberOfOrder: 1 },
    { "Name": "Tea", NumberOfOrder: 1 },
];
var customersOrderDrinking1 = [
    { "Name": "KOI", NumberOfOrder: 7 },
    { "Name": "Coffee", NumberOfOrder: 3 },
    { "Name": "Tea", NumberOfOrder: 1 },
];
var customers = new Customer_1.Customer(customersOrderFood, 2, 5, customersOrderDrinking);
// console.log(customers.getCustomerOrderByTableID(2));
var customers1 = new Customer_1.Customer(customersOrderFood, 4, 5, customersOrderDrinking);
customers1.addToorderedList();
customers.addToorderedList();
customers1.orderMoreFood(customersOrderFood);
var cashier = new Cashier_1.Cashier(customersOrderFood, 3, 5, customersOrderDrinking);
customers.addToorderedList();
customers1.addToorderedList();
console.log(cashier.getAllOrderInADay());
cashier.getTotalPriceOfDrinking(customersOrderDrinking1);
cashier.getTotalPriceOfDrinking(customersOrderDrinking);
// console.log(customers.getAllOrderList());
var minusOrder = [{ name: "Koko", numberMinusOrder: 3 },
    { name: "Coffee", numberMinusOrder: 1 },
    { name: "KOI", numberMinusOrder: 1 },
];
// console.log(customers1.getCustomerOrderFood());
// customers.minusOrderFood(minusOrder)
// console.log(customers1.getCustomerOrderFood());
var table = new Table_1.Table();
table.addTableBooked(customers1.getTableSit());
table.addTableBooked(customers.getTableSit());
