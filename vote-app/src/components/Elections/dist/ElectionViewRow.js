"use strict";
exports.__esModule = true;
exports.ElectionViewRow = void 0;
var react_1 = require("react");
function ElectionViewRow(_a) {
    var election = _a.election;
    return (react_1["default"].createElement("tr", null,
        react_1["default"].createElement("td", null, election.id),
        react_1["default"].createElement("td", null, election.title),
        react_1["default"].createElement("td", null,
            react_1["default"].createElement("button", { type: "button" }, "Vote"))));
}
exports.ElectionViewRow = ElectionViewRow;
