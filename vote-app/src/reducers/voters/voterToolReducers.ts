import { Reducer, combineReducers, AnyAction } from 'redux';

import { Voter } from '../../models/voters/Voter';
import { VotersSort } from '../../models/voters/VoterTool';
import { VoterToolState } from '../../models/voters/VoterToolState';

import {
    EDIT_VOTER_ACTION, isExistingVoterAction, isNewVoterAction,
    REMOVE_VOTER_ACTION, isVoterAction, APPEND_VOTER_ACTION, REPLACE_VOTER_ACTION, isSortVotersAction
} from '../../actions/voters/voterToolActions';

import {
    SortVotersAction, NewVoterAction, ExistingVoterAction,
    VoterIdAction, VoterAction, isVoterIdAction,
} from '../../actions/voters/voterToolActions';
import { Election } from '../../models/elections/Election';

import {
    SelectElectionAction, isSelectElectionAction, isCancelBallotAction
} from '../../actions/elections/ElectionsActions';

const voterList: Voter[] = [
    { id: 1, firstName: 'Annette', lastName: 'Beatty', address: '1234 Sesame Street', city: 'San Diego',
        birthday: 110120, email: "x@gmail.com", phone: 6194812222 },
    { id: 2, firstName: 'Jorge', lastName: 'Salazar', address: '23354 Main Street', city: 'San Diego',
        birthday: 121519, email: "yyy@yahoo.com", phone: 5231235382 },
    { id: 4, firstName: 'Eldin', lastName: 'Turulja', address: '555 Ocean Boulevard', city: 'San Diego',
        birthday: 101020, email: "fred@gmail.com", phone: 6194812222 },
    { id: 5, firstName: 'Babu', lastName: 'Raju', address: '5552 El Camino Real', city: 'San Diego',
        birthday: 121519, email: "babu@intuit.com", phone: 5231235382 },
];

export const votersSortReducer: Reducer<VotersSort, SortVotersAction> = (votersSort = { col:'id', dir: 'asc' }, action) => {

    if (isSortVotersAction(action)) {

        if (action.payload.col === votersSort.col) {
            return {
                ...votersSort,
                dir: 'asc' === votersSort.dir ? 'desc' : 'asc',
            };
        } else {
            return {
                col: action.payload.col,
                dir: 'asc',
            };
        }

    }

    return votersSort;
};

type EditVoterIdReducerActions = NewVoterAction | ExistingVoterAction | VoterIdAction | VoterAction | SelectElectionAction;

export const editVoterIdReducer: Reducer<number, EditVoterIdReducerActions> = (editVoterId = -1, action) => {

    if (isVoterIdAction(action)) {
        if (action.type === EDIT_VOTER_ACTION) {
            return action.payload.voterId;
        }

        if (action.type === REMOVE_VOTER_ACTION) {
            return -1;
        }
    }

    if (isNewVoterAction(action) || isExistingVoterAction(action) || isVoterAction(action)) {
        return -1;
    }

    return editVoterId;
}

type VotersReducerActions = NewVoterAction | ExistingVoterAction | VoterIdAction;

export const votersReducer: Reducer<Voter[], VotersReducerActions> = (voters = voterList, action) => {

    if (isNewVoterAction(action) && action.type === APPEND_VOTER_ACTION) {
        return [
            ...voters,
            {
                ...action.payload.voter,
                id: Math.max(...voters.map(c => c.id), 0) + 1,
            },
        ];
    }

    if (isExistingVoterAction(action) && action.type === REPLACE_VOTER_ACTION) {
        const voterIndex = voters.findIndex(c => c.id === action.payload.voter.id);
        const newVoters = voters.concat();
        newVoters[voterIndex] = action.payload.voter;
        return newVoters
    }

    if (isVoterIdAction(action)) {
        if( action.type === REMOVE_VOTER_ACTION) {
            return voters.filter(c => c.id !== action.payload.voterId);
        }
        else if (action.type === EDIT_VOTER_ACTION) {
        }
    }

    return voters;
};

export const electionsReducer: Reducer<Election[], VotersReducerActions> = (elections = [], action) => {
    return elections;
};

export const selectElectionReducer: Reducer<number, EditVoterIdReducerActions> = (electionId = 0, action) => {

    if (isSelectElectionAction(action)) {
      return action.payload.electionId;
    }
    else if (isCancelBallotAction(action)) {
      return 0;
    }

    return electionId;
}

export const voterToolReducer: Reducer<VoterToolState, AnyAction> = combineReducers({
    votersSort: votersSortReducer,
    editVoterId: editVoterIdReducer,
    voters: votersReducer,
    elections: electionsReducer,
    currentElectionId: selectElectionReducer,
});
