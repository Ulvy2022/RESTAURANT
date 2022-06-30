"use strict";
exports.__esModule = true;
exports.Drinking = void 0;
var Drinking = /** @class */ (function () {
    function Drinking() {
        this.drinkingMenu = [
            { "Name": "KOI", Price: 5 },
            { "Name": "Coffee", Price: 5 },
            { "Name": "Tea", Price: 5 },
            { "Name": "Coca Cola", Price: 5 },
            { "Name": "PepSi", Price: 5 },
        ];
    }
    Drinking.prototype.getDrinkingMenu = function () {
        return this.drinkingMenu;
    };
    return Drinking;
}());
exports.Drinking = Drinking;
