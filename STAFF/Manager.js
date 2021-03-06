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
exports.Manager = void 0;
//import person class
var Person_1 = require("../ENUM/Person");
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, age, phone, salary, category, address) {
        var _this = _super.call(this, name, age, phone, category, address) || this;
        _this.salary = salary;
        return _this;
    }
    return Manager;
}(Person_1.Person));
exports.Manager = Manager;
