"use strict";
exports.__esModule = true;
exports.ElectionsTable = void 0;
var react_1 = require("react");
var ElectionViewRow_1 = require("./ElectionViewRow");
function ElectionsTable(props) {
    return (react_1["default"].createElement("table", null,
        react_1["default"].createElement("thead", null,
            react_1["default"].createElement("tr", null,
                react_1["default"].createElement("th", null, "Id"),
                react_1["default"].createElement("th", null, "Title"),
                react_1["default"].createElement("th", null, "Actions"))),
        react_1["default"].createElement("tbody", null, props.elections.map(function (election) {
            return react_1["default"].createElement(ElectionViewRow_1.ElectionViewRow, { key: election.id, election: election });
        }))));
}
exports.ElectionsTable = ElectionsTable;
