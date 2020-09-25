import { Action } from 'redux';

import { Election, NewElection, ElectionKeys } from '../../models/elections/Election';
import { Ballot } from '../../models/elections/Ballot';


export const APPEND_ELECTION_ACTION = 'APPEND_ELECTION';
export const UPDATE_ELECTION_ACTION = 'UPDATE_ELECTION';
export const SELECT_ELECTION_ACTION = 'SELECT_ELECTION';
export const CANCEL_BALLOT_ACTION = 'CANCEL_BALLOT';

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
    payload: { ballot: Ballot }
}

export function isUpdateElectionAction(action: Action<string>): action is UpdateElectionAction {
    return UPDATE_ELECTION_ACTION === action.type;
}

export const createUpdateElectionAction: (ballot: Ballot) => UpdateElectionAction = ballot => ({
    type: UPDATE_ELECTION_ACTION, payload: { ballot },
});
// End Update Election Action


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
