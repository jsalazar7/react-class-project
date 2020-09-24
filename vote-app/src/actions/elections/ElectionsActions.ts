import { Action } from 'redux';

import { Election, NewElection, ElectionKeys } from '../../models/elections/Election';

export const APPEND_ELECTION_ACTION = 'APPEND_ELECTION';

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
