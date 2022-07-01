"use strict";
exports.__esModule = true;
exports.FoodMenu = void 0;
var FoodMenu = /** @class */ (function () {
    function FoodMenu() {
        this.food = [
            { "Name": "Koko", Price: 5 },
            { "Name": "Kare", Price: 4 },
            { "Name": "Chha Kdav", Price: 7 },
            { "Name": "Sgoar Jruk", Price: 6 },
            { "Name": "Tong Yam", Price: 8 },
            { "Name": "Chha Spei", Price: 9 },
            { "Name": "Trey Sweet", Price: 15 },
        ];
    }
    FoodMenu.prototype.getPrice = function (foodName) {
        var price = 0;
        for (var _i = 0, _a = this.food; _i < _a.length; _i++) {
            var value = _a[_i];
            if (value.Name === foodName) {
                price = value.Price;
            }
        }
        return price;
    };
    FoodMenu.prototype.getAllFood = function () {
        return this.food;
    };
    return FoodMenu;
}());
exports.FoodMenu = FoodMenu;
