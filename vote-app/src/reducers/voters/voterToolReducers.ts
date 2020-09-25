import { Reducer, combineReducers, AnyAction } from 'redux';

import { Voter } from '../../models/voters/Voter';
import { VotersSort } from '../../models/voters/VoterTool';
import { VoterToolState } from '../../models/voters/VoterToolState';

import {
    EDIT_VOTER_ACTION, isExistingVoterAction, isNewVoterAction, isRefreshVotersDoneAction,
    REMOVE_VOTER_ACTION, isVoterAction, APPEND_VOTER_ACTION, REPLACE_VOTER_ACTION, isSortVotersAction
} from '../../actions/voters/voterToolActions';

import {
    SortVotersAction, NewVoterAction, ExistingVoterAction,
    VoterIdAction, VoterAction, isVoterIdAction, RefreshVotersDoneAction
} from '../../actions/voters/voterToolActions';
import { Election } from '../../models/elections/Election';

import {
    SelectElectionAction, isSelectElectionAction, isCancelBallotAction,
    isRefreshElectionsRequestAction, isRefreshElectionsDoneAction, 
    ShowElectionAction,
    RefreshElectionsDoneAction,
    isShowElectionAction
} from '../../actions/elections/ElectionsActions';

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

export const votersReducer: Reducer<Voter[], VotersReducerActions> = (voters = [], action) => {

    if (isRefreshVotersDoneAction(action)) {
       return action.payload.voters;
    }

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


type ShowElectionReducerActions = RefreshElectionsDoneAction | ShowElectionAction;

export const showElectionReducer: Reducer<number, ShowElectionReducerActions> = (showElectionId = -1, action) => {

  if (isShowElectionAction(action)) {
    return action.payload.electionId;
  }

  if (isRefreshElectionsDoneAction(action)) {
    return -1;
  }

  return showElectionId;
}

type ElectionReducerActions = RefreshElectionsDoneAction;

export const electionsReducer: Reducer<Election[], ElectionReducerActions> = (elections = [], action) => {

    // Once the refresh action is done, we will yoink the payload and update the state
    if (isRefreshElectionsDoneAction(action)) {
        return action.payload.elections;
    }

    return elections;
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
