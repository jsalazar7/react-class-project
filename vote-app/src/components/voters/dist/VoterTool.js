"use strict";
exports.__esModule = true;
exports.VoterTool = void 0;
var react_1 = require("react");
var ToolHeader_1 = require("../ToolHeader");
var VoterTable_1 = require("./VoterTable");
var VoterForm_1 = require("./VoterForm");
var Elections_1 = require("../elections/Elections");
function VoterTool(props) {
    var voters = props.voters, editVoterId = props.editVoterId, votersSort = props.votersSort, addVoter = props.onAddVoter, saveVoter = props.onSaveVoter, deleteVoter = props.onDeleteVoter, editVoter = props.onEditVoter, cancelVoter = props.onCancelVoter, sortVoters = props.onSortVoters;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(ToolHeader_1.ToolHeader, { headerText: "Voter Tool" }),
        react_1["default"].createElement(VoterTable_1.VoterTable, { voters: voters, votersSort: votersSort, editVoterId: editVoterId, onEditVoter: editVoter, onDeleteVoter: deleteVoter, onSaveVoter: saveVoter, onCancelVoter: cancelVoter, onSortVoters: sortVoters }),
        react_1["default"].createElement(VoterForm_1.VoterForm, { buttonText: "Add Voter", onSubmitVoter: addVoter }),
        react_1["default"].createElement(Elections_1.Elections, null)));
}
exports.VoterTool = VoterTool;
