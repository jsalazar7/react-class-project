import { Action, Dispatch } from 'redux';

import { Election, NewElection, ElectionKeys } from '../../models/elections/Election';
import { Ballot } from '../../models/elections/Ballot';


export const APPEND_ELECTION_ACTION = 'APPEND_ELECTION';
export const UPDATE_ELECTION_ACTION = 'UPDATE_ELECTION';
export const SELECT_ELECTION_ACTION = 'SELECT_ELECTION';
export const CANCEL_BALLOT_ACTION = 'CANCEL_BALLOT';

export const REFRESH_ELECTION_REQUEST_ACTION = 'REFRESH_ELECTION_REQUEST_ACTION';
export const REFRESH_ELECTION_DONE_ACTION = 'REFRESH_ELECTION_DONE_ACTION';

export const APPEND_ELECTION_REQUEST_ACTION = 'APPEND_ELECTION_REQUEST_ACTION';
export const APPEND_ELECTION_DONE_ACTION = 'APPEND_ELECTION_DONE_ACTION';

export const VIEW_ELECTION_QUESTIONS_ACTION = 'VIEW_ELECTION_QUESTIONS_ACTION';
export const VERIFY_VOTER_ACTION = 'VERIFY_VOTER';
export const UPDATE_ERROR_ACTION = 'UPDATE_ERROR';

// New Election Action

export interface NewElectionAction extends Action<string> {
    payload: { election: NewElection }
}

export type CreateNewElectionAction = (election: NewElection) => NewElectionAction

export function isNewElectionAction(action: Action<string>): action is NewElectionAction {
    return [ APPEND_ELECTION_ACTION ].includes(action.type);
}

export const createAppendElectionAction: CreateNewElectionAction = (election) => ({
    type: APPEND_ELECTION_ACTION, payload: { election },
});

// End New Election Action


// Update Election Action
export interface UpdateElectionAction extends Action<string> {
    payload: {election: Election }
}

export function isUpdateElectionAction(action: Action<string>): action is UpdateElectionAction {
    return UPDATE_ELECTION_ACTION === action.type;
}

export const createUpdateElectionAction: (election: Election) => UpdateElectionAction = election => ({
    type: UPDATE_ELECTION_ACTION, payload: { election },
});

// End Update Election Action

// Verify voter Action
export interface VerifyVoterAction extends Action<string> {
    payload: { voterId: number }
}

export function isVerifyVoterAction(action: Action<string>): action is VerifyVoterAction {
    return VERIFY_VOTER_ACTION === action.type;
}

export const createVerifyVoterAction: (voterId: number) => VerifyVoterAction = voterId => ({
    type: VERIFY_VOTER_ACTION, payload: { voterId },
});

// End Verify voter Action

// Select Election Action
export interface SelectElectionAction extends Action<string> {
    payload: { electionId: number }
}

export function isSelectElectionAction(action: Action<string>): action is SelectElectionAction {
    return SELECT_ELECTION_ACTION === action.type;
}

export const creatSelectElectionAction: (electionId: number) => SelectElectionAction = electionId => ({
    type: SELECT_ELECTION_ACTION, payload: { electionId },
});
// End Select Election Action

// Cancel Ballot Action
export type CancelBallotAction = Action<string>;

export function isCancelBallotAction(action: Action<string>): action is CancelBallotAction {
    return action.type === CANCEL_BALLOT_ACTION;
  }

  export const createCancelBallotAction: () => CancelBallotAction = () => ({
    type: CANCEL_BALLOT_ACTION,
  });
// End Cancel Ballot Action

// Refresh Elections Action

export type RefreshElectionsRequestAction = Action<string>;

export interface RefreshElectionsDoneAction extends Action<string> {
  payload: { elections: Election[] }
}

export type CreateRefreshElectionsRequestAction = () => RefreshElectionsRequestAction;
export type CreateRefreshElectionsDoneAction = (elections: Election[]) => RefreshElectionsDoneAction;

export function isRefreshElectionsRequestAction(action: Action<string>): action is RefreshElectionsRequestAction {
  return REFRESH_ELECTION_REQUEST_ACTION === action.type;
}

export function isRefreshElectionsDoneAction(action: Action<string>): action is RefreshElectionsDoneAction {
  return REFRESH_ELECTION_DONE_ACTION === action.type;
}

export const createRefreshElectionsRequestAction: CreateRefreshElectionsRequestAction = () => ({
  type: REFRESH_ELECTION_REQUEST_ACTION,
});

export const createRefreshElectionsDoneAction: CreateRefreshElectionsDoneAction = (elections: Election[]) => ({
  type: REFRESH_ELECTION_DONE_ACTION, payload: { elections }
});

export const refreshElections = () => {

    // this is the function object which is dispatched
    return async (dispatch: Dispatch) => {
        dispatch(createRefreshElectionsRequestAction());
        const res = await fetch('http://localhost:3060/elections');
        const elections = await res.json();
        dispatch(createRefreshElectionsDoneAction(elections));
    };

};

// End Refresh Elections Action

// New Election Action

export interface AppendElectionRequestAction extends Action<string> {
    payload: { election: NewElection }
}
  
export type CreateAppendElectionRequestAction = (election: NewElection) => AppendElectionRequestAction
  
export function isAppendElectionRequestAction(action: Action<string>): action is AppendElectionRequestAction {
    return APPEND_ELECTION_REQUEST_ACTION === action.type;
}
  
export const createAppendElectionRequestAction: CreateAppendElectionRequestAction = (election) => ({
    type: APPEND_ELECTION_REQUEST_ACTION, payload: { election },
});
  
export const appendElection = (election: NewElection) => {
  
    return async (dispatch: Dispatch) => {
        dispatch(createAppendElectionRequestAction(election));
        await fetch('http://localhost:3060/elections', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(election),
        });
        refreshElections()(dispatch);
    };
  
};
  
// End New Election Action

// Show Election Action

export interface ShowElectionAction extends Action<string> {
    payload: { electionId: number }
  }
  
export type CreateShowElectionAction = (electionId: number) => ShowElectionAction
  
export function isShowElectionAction(action: Action<string>): action is ShowElectionAction {
    return action.type === VIEW_ELECTION_QUESTIONS_ACTION;
}
  
  
export const createShowElectionAction: CreateShowElectionAction = (electionId) => ({
    type: VIEW_ELECTION_QUESTIONS_ACTION, payload: { electionId },
});
  
// End Show Election Election


// Update Error Action
export interface UpdateErrorAction extends Action<string> {
    payload: { errorId: number }
}

export function isUpdateErrorAction(action: Action<string>): action is UpdateErrorAction {
    return UPDATE_ERROR_ACTION === action.type;
}

export const createUpdateErrorAction: (errorId: number) => UpdateErrorAction = errorId => ({
    type: UPDATE_ERROR_ACTION, payload: { errorId },
});
// End Update Error Action