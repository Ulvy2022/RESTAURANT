"use strict";
exports.__esModule = true;
exports.Table = void 0;
var Table = /** @class */ (function () {
    function Table() {
        this.allTable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        this.tableBooked = [];
        this.numberOFChair = 5;
    }
    Table.prototype.getAlltable = function () {
        return this.allTable;
    };
    Table.prototype.hasCustomerOnTable = function (id) {
        if (id <= this.allTable[this.allTable.length - 1]) {
            if (this.tableBooked.indexOf(id) == -1) {
                this.addTableBooked(id);
                return "No customers";
            }
        }
        return "has customers";
    };
    Table.prototype.addTableBooked = function (id) {
        this.tableBooked.push(id);
    };
    Table.prototype.getTableBooked = function () {
        return this.tableBooked;
    };
    Table.prototype.findFreeTable = function () {
        var freeTable = [];
        for (var _i = 0, _a = this.getAlltable(); _i < _a.length; _i++) {
            var value = _a[_i];
            if (this.getTableBooked().indexOf(value) == -1) {
                freeTable.push(value);
            }
        }
        var result = "ALl free tables are: \n";
        for (var _b = 0, freeTable_1 = freeTable; _b < freeTable_1.length; _b++) {
            var id = freeTable_1[_b];
            result += "table ID : " + id.toString() + "\n";
        }
        return result;
    };
    Table.prototype.setTableTo = function (oldID, newID) {
        for (var id = 0; id < this.tableBooked.length; id++) {
            if (this.tableBooked[id] == oldID) {
                this.tableBooked[id] = newID;
            }
        }
        return "Succes updated";
    };
    Table.prototype.changeTableSitTo = function (oldID, newID) {
        var table = new Table();
        if (oldID == newID) {
            return "Your new table ID can't be the same as the old one ):";
        }
        else if (newID <= 16) {
            for (var id = 0; id < this.tableBooked.length; id++) {
                if (this.tableBooked[id] == oldID) {
                    this.tableBooked[id] = newID;
                }
            }
            return "Sorry that table is already booked :(";
        }
        return "Your tablID doesn't exist ):";
    };
    return Table;
}());
exports.Table = Table;
