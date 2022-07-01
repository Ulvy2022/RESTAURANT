"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Cashier = void 0;
//import food  Menu class 
var FoodMenu_1 = require("../FOOD CATEGORY/FoodMenu");
//import drinking class 
var DrinkingCategory_1 = require("../FOOD CATEGORY/DrinkingCategory");
// import customer class 
var Customer_1 = require("../CUSTOMERS/Customer");
var totalPrice = 0;
var Cashier = /** @class */ (function (_super) {
    __extends(Cashier, _super);
    function Cashier() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.method = [
            { "Name": "ABA", "AccountID": 1234567 },
            { "Name": "ACELEDA", "AccountID": 3648334 },
            { "Name": "WING", "AccountID": 43532823 },
            { "Name": "Cash", "AccountID": 0 }
        ];
        _this.listOfPaid = [];
        return _this;
    }
    Cashier.prototype.getAllMethod = function () {
        return this.method;
    };
    ;
    Cashier.prototype.getAllCustomerAlreadyPaid = function () {
        var result = "The customer already paid set on tableID: \n";
        for (var _i = 0, _a = this.listOfPaid; _i < _a.length; _i++) {
            var value = _a[_i];
            result += "table ID : " + value.toString() + "\n";
        }
        return result;
    };
    Cashier.prototype.paymentBy = function (name, tableID) {
        var ifMatchPayment = "Sorry we don't have " + name + " account!";
        for (var _i = 0, _a = this.method; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.Name === name && tableID <= 16) {
                this.listOfPaid.push(tableID);
                // ifMatchPayment = "Table ID "+this.getTableSit()+" already paid by "+name;
            }
        }
        return ifMatchPayment;
    };
    Cashier.prototype.getTotalPriceOfFood = function (allFood) {
        // let totalPrice:number = 0;
        var food = new FoodMenu_1.FoodMenu();
        var price = 0;
        for (var _i = 0, allFood_1 = allFood; _i < allFood_1.length; _i++) {
            var foodName = allFood_1[_i];
            for (var _a = 0, _b = food.getAllFood(); _a < _b.length; _a++) {
                var value = _b[_a];
                if (foodName.Name === value.Name) {
                    price += value.Price * foodName.NumberOfOrder;
                }
            }
        }
        totalPrice += price;
        return price;
    };
    Cashier.prototype.getTotalPriceOfDrinking = function (allDrinking) {
        // let totalPrice:number = 0;
        var drinking = new DrinkingCategory_1.Drinking();
        var price = 0;
        for (var _i = 0, allDrinking_1 = allDrinking; _i < allDrinking_1.length; _i++) {
            var drinkingName = allDrinking_1[_i];
            for (var _a = 0, _b = drinking.getDrinkingMenu(); _a < _b.length; _a++) {
                var value = _b[_a];
                if (drinkingName.Name === value.Name) {
                    price += value.Price * drinkingName.NumberOfOrder;
                }
            }
        }
        totalPrice += price;
        return price;
    };
    Cashier.prototype.getTotalPrice = function (food, drinking) {
        this.getTotalPriceOfDrinking(drinking);
        this.getTotalPriceOfFood(food);
        return "Total price : " + totalPrice + " dollars";
    };
    Cashier.prototype.getCustomerOrderDrinkingWithPrice = function (drinking) {
        var result = "              Drinking customer has ordered: \n";
        var drinkingList = new DrinkingCategory_1.Drinking();
        for (var _i = 0, _a = drinkingList.getDrinkingMenu(); _i < _a.length; _i++) {
            var value = _a[_i];
            for (var _b = 0, drinking_1 = drinking; _b < drinking_1.length; _b++) {
                var drink = drinking_1[_b];
                if (drink.Name == value.Name) {
                    result += "Name :" + drink.Name + "; NumberOfOrder :" + drink.NumberOfOrder + "  ; Price : " + value.Price * drink.NumberOfOrder + " dollars" + "\n";
                }
            }
        }
        return result;
    };
    Cashier.prototype.getCustomerOrderFoodWithPrice = function (foods) {
        var result = "              Food customer has ordered: \n";
        var food = new FoodMenu_1.FoodMenu();
        for (var _i = 0, _a = food.getAllFood(); _i < _a.length; _i++) {
            var value = _a[_i];
            for (var _b = 0, foods_1 = foods; _b < foods_1.length; _b++) {
                var food_1 = foods_1[_b];
                if (food_1.Name == value.Name) {
                    result += "Name :" + food_1.Name + "; NumberOfOrder :" + food_1.NumberOfOrder + "  ; Price : " + value.Price * food_1.NumberOfOrder + " dollars" + "\n";
                }
            }
        }
        return result;
    };
    Cashier.prototype.getTableSited = function () {
        return "Customer sit on table " + this.getTableSit();
    };
    Cashier.prototype.getCustomerOrderByTableID = function (id) {
        if (id <= 16) {
            if (this.tableSitID == id && this.foodOrder.length > 0 && this.allDrinking.length > 0) {
                return this.foodOrder, this.allDrinking;
            }
            else if (this.tableSitID == id || this.foodOrder.length < 0 || this.allDrinking.length < 0) {
                return "This tableID is have no customer!";
            }
        }
        else if (id > 16) {
            return "Sorry tableID not found!";
        }
    };
    return Cashier;
}(Customer_1.Customer));
exports.Cashier = Cashier;
