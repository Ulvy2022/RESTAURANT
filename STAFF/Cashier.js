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
        return _this;
    }
    Cashier.prototype.getAllMethod = function () {
        return this.method;
    };
    ;
    Cashier.prototype.paymentBy = function (name) {
        var ifMatchPayment = "Sorry we don't have " + name + " account!";
        for (var _i = 0, _a = this.method; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.Name === name) {
                ifMatchPayment = "Table ID " + this.getTableSit() + " already paid thanks you >3 ";
            }
        }
        return ifMatchPayment;
    };
    Cashier.prototype.getAllOrderInADay = function () {
        return this.ordereList;
    };
    Cashier.prototype.getTotalPriceOfFood = function (allFood) {
        var totalPrice = 0;
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
        var totalPrice = 0;
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
    Cashier.prototype.getTotalPriceWith = function (tableID) {
        return this.getTotalPrice();
    };
    Cashier.prototype.getTotalPrice = function () {
        var totalPrice = 0;
        var drinkingList = new DrinkingCategory_1.Drinking();
        var food = new FoodMenu_1.FoodMenu();
        for (var _i = 0, _a = drinkingList.getDrinkingMenu(); _i < _a.length; _i++) {
            var value = _a[_i];
            for (var _b = 0, _c = this.getCustomerOrderDrinking(); _b < _c.length; _b++) {
                var drink = _c[_b];
                if (drink.Name == value.Name) {
                    totalPrice += value.Price * drink.NumberOfOrder;
                }
            }
        }
        for (var _d = 0, _e = food.getAllFood(); _d < _e.length; _d++) {
            var value = _e[_d];
            for (var _f = 0, _g = this.foodOrder; _f < _g.length; _f++) {
                var f = _g[_f];
                if (f.Name == value.Name) {
                    totalPrice += value.Price * f.NumberOfOrder;
                }
            }
        }
        return "Total price :" + totalPrice + " dollars";
    };
    Cashier.prototype.getCustomerOrderDrinkingWithPrice = function () {
        var result = "              Drinking customer has ordered: \n";
        var drinkingList = new DrinkingCategory_1.Drinking();
        for (var _i = 0, _a = drinkingList.getDrinkingMenu(); _i < _a.length; _i++) {
            var value = _a[_i];
            for (var _b = 0, _c = this.getCustomerOrderDrinking(); _b < _c.length; _b++) {
                var drink = _c[_b];
                if (drink.Name == value.Name) {
                    result += "Name :" + drink.Name + "; NumberOfOrder :" + drink.NumberOfOrder + "  ; Price : " + value.Price * drink.NumberOfOrder + " dollars" + "\n";
                }
            }
        }
        return result;
    };
    Cashier.prototype.getCustomerOrderFoodWithPrice = function () {
        var result = "              Food customer has ordered: \n";
        var food = new FoodMenu_1.FoodMenu();
        for (var _i = 0, _a = food.getAllFood(); _i < _a.length; _i++) {
            var value = _a[_i];
            for (var _b = 0, _c = this.foodOrder; _b < _c.length; _b++) {
                var food_1 = _c[_b];
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
