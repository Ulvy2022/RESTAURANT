"use strict";
exports.__esModule = true;
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(foodOrder, tableSitID, numberOfCustomer, allDrinking) {
        if (foodOrder === void 0) { foodOrder = []; }
        if (allDrinking === void 0) { allDrinking = []; }
        this.foodOrder = foodOrder;
        this.tableSitID = tableSitID;
        this.numberOfCustomer = numberOfCustomer;
        this.allDrinking = allDrinking;
        this.ordereList = [];
        this.lisOrderEachCustomer = [];
    }
    Customer.prototype.getCustomerOrderFood = function () {
        return this.foodOrder;
    };
    Customer.prototype.getCustomerOrderDrinking = function () {
        return this.allDrinking;
    };
    Customer.prototype.getTableSit = function () {
        return this.tableSitID;
    };
    Customer.prototype.getNumberOfCustomer = function () {
        return this.numberOfCustomer;
    };
    Customer.prototype.cancelOrderFood = function (name) {
        for (var _i = 0, name_1 = name; _i < name_1.length; _i++) {
            var value = name_1[_i];
            for (var food = 0; food < this.foodOrder.length; food++) {
                if (this.foodOrder[food].Name == value) {
                    this.foodOrder.splice(food, 1);
                }
            }
        }
    };
    Customer.prototype.cancelOrderDrinking = function (name) {
        for (var _i = 0, name_2 = name; _i < name_2.length; _i++) {
            var value = name_2[_i];
            for (var drink = 0; drink < this.allDrinking.length; drink++) {
                if (this.allDrinking[drink].Name == value) {
                    this.allDrinking.splice(drink, 1);
                }
            }
        }
    };
    Customer.prototype.orderMoreFood = function (foods) {
        for (var _i = 0, foods_1 = foods; _i < foods_1.length; _i++) {
            var food = foods_1[_i];
            this.allDrinking.push(food);
        }
    };
    Customer.prototype.orderMoreDrinking = function (drinking) {
        for (var _i = 0, drinking_1 = drinking; _i < drinking_1.length; _i++) {
            var value = drinking_1[_i];
            this.allDrinking.push(value);
        }
    };
    Customer.prototype.minusOrderFood = function (minus) {
        for (var _i = 0, _a = this.foodOrder; _i < _a.length; _i++) {
            var value = _a[_i];
            for (var _b = 0, minus_1 = minus; _b < minus_1.length; _b++) {
                var mi = minus_1[_b];
                if (mi.name === value.Name) {
                    value.NumberOfOrder -= mi.numberMinusOrder;
                }
            }
        }
    };
    Customer.prototype.minusOrderDrink = function (minus) {
        for (var _i = 0, minus_2 = minus; _i < minus_2.length; _i++) {
            var value = minus_2[_i];
            for (var _a = 0, _b = this.allDrinking; _a < _b.length; _a++) {
                var drink = _b[_a];
                if (drink.Name === value.name) {
                    drink.NumberOfOrder -= value.numberMinusOrder;
                }
            }
        }
    };
    Customer.prototype.addToorderedList = function () {
        this.lisOrderEachCustomer.push(this.tableSitID);
        this.lisOrderEachCustomer.push(this.foodOrder);
        this.lisOrderEachCustomer.push(this.allDrinking);
        this.ordereList.push(this.lisOrderEachCustomer);
    };
    Customer.prototype.getAllOrderList = function () {
        return this.ordereList;
    };
    return Customer;
}());
exports.Customer = Customer;
