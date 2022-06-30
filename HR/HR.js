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
exports.HR = void 0;
var Person_1 = require("../ENUM/Person");
var HR = /** @class */ (function (_super) {
    __extends(HR, _super);
    function HR(name, age, phone, salary, category, staffID, address) {
        var _this = _super.call(this, name, age, phone, category, address) || this;
        _this.staffs = [];
        _this.salary = salary;
        _this.staffID = staffID;
        return _this;
    }
    HR.prototype.addStaff = function (staff) {
        return this.staffs.push(staff);
    };
    HR.prototype.getStaffByCategory = function (categoryName) {
        var result = [];
        for (var _i = 0, _a = this.staffs; _i < _a.length; _i++) {
            var staff = _a[_i];
            if (staff.category == categoryName) {
                result.push(staff);
            }
        }
        if (result.length > 0) {
            return result;
        }
        return "This category is have no staff..!";
    };
    HR.prototype.getStaffBySalary = function (salary) {
        var result = [];
        for (var _i = 0, _a = this.staffs; _i < _a.length; _i++) {
            var staff = _a[_i];
            if (staff.getSalary() == salary) {
                result.push(staff);
            }
        }
        if (result.length > 0) {
            return result;
        }
        return "This category is have no staff..!";
    };
    HR.prototype.getStaffBy = function (id) {
        var result = [];
        for (var _i = 0, _a = this.staffs; _i < _a.length; _i++) {
            var staff = _a[_i];
            if (staff.staffID == id) {
                result.push(staff);
            }
        }
        if (result.length > 0) {
            return result;
        }
        return "This staffID is have not found..!";
    };
    HR.prototype.getAllStaff = function () {
        return this.staffs;
    };
    HR.prototype.getNumberOFStaff = function () {
        return "Your all  staffs are " + this.staffs.length;
    };
    HR.prototype.resignStaff = function (id) {
        var index = 0;
        for (var _i = 0, _a = this.staffs; _i < _a.length; _i++) {
            var staff = _a[_i];
            if (staff.staffID == id) {
                this.staffs.splice(index, 1);
            }
            index++;
        }
        return "This staff is resign";
    };
    HR.prototype.increaseSalary = function (staffID, newSalary) {
        for (var _i = 0, _a = this.staffs; _i < _a.length; _i++) {
            var staff = _a[_i];
            if (staff.staffID == staffID) {
                staff.salary = newSalary;
                return staff;
            }
        }
        return [];
    };
    return HR;
}(Person_1.Person));
exports.HR = HR;
