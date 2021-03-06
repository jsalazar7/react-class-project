import { Action, Dispatch } from 'redux';

import { Voter, NewVoter, VoterKeys } from '../../models/voters/Voter';

export const APPEND_VOTER_ACTION = 'APPEND_VOTER';
export const REPLACE_VOTER_ACTION = 'REPLACE_VOTER';
export const REMOVE_VOTER_ACTION = 'REMOVE_VOTER';
export const EDIT_VOTER_ACTION = 'EDIT_VOTER';
export const CANCEL_VOTER_ACTION = 'CANCEL_VOTER';
export const SORT_VOTERS_ACTION = 'SORT_VOTERS';

export const REFRESH_VOTERS_REQUEST_ACTION = 'REFRESH_VOTERS_REQUEST';
export const REFRESH_VOTERS_DONE_ACTION = 'REFRESH_VOTERS_DONE';

// New Voter Action

export interface NewVoterAction extends Action<string> {
    payload: { voter: NewVoter }
}

export type CreateNewVoterAction = (voter: NewVoter) => NewVoterAction

export function isNewVoterAction(action: Action<string>): action is NewVoterAction {
    return [ APPEND_VOTER_ACTION ].includes(action.type);
}

export const createAppendVoterAction: CreateNewVoterAction = (voter) => ({
    type: APPEND_VOTER_ACTION, payload: { voter },
});

// End New Voter Action

// Existing Voter Action

export interface ExistingVoterAction extends Action<string> {
    payload: { voter: Voter }
}

export type CreateExistingVoterAction = (voter: Voter) => ExistingVoterAction

export function isExistingVoterAction(action: Action<string>): action is ExistingVoterAction {
    return [ REPLACE_VOTER_ACTION ].includes(action.type);
}

export const createReplaceVoterAction: CreateExistingVoterAction = (voter) => ({
    type: REPLACE_VOTER_ACTION, payload: { voter },
});

// End Existing Voter Action

// Voter Id Action

export interface VoterIdAction extends Action<string> {
    payload: { voterId: number }
}

export type CreateVoterIdAction = (voterId: number) => VoterIdAction

export function isVoterIdAction(action: Action<string>): action is VoterIdAction {
    return [ REMOVE_VOTER_ACTION, EDIT_VOTER_ACTION ].includes(action.type);
}

export const createRemoveVoterAction: CreateVoterIdAction = (voterId) => ({
    type: REMOVE_VOTER_ACTION, payload: { voterId },
});

export const createEditVoterAction: CreateVoterIdAction = (voterId) => ({
    type: EDIT_VOTER_ACTION, payload: { voterId },
});

// End Voter Id Action

// Voter Action

export type VoterAction = Action<string>;

export type CreateVoterAction = () => VoterAction

export function isVoterAction(action: Action<string>): action is VoterAction {
    return [ CANCEL_VOTER_ACTION ].includes(action.type);
}

export const createCancelVoterAction: CreateVoterAction = () => ({
    type: CANCEL_VOTER_ACTION,
});

// End Voter Action

// Sort Voters Action

export interface SortVotersAction extends Action<string> {
    payload: { col: VoterKeys }
}

export type CreateSortVotersAction = (col: VoterKeys) => SortVotersAction

export function isSortVotersAction(action: Action<string>): action is SortVotersAction {
    return [ SORT_VOTERS_ACTION ].includes(action.type);
}

export const createSortVotersAction: CreateSortVotersAction = (col: VoterKeys) => ({
    type: SORT_VOTERS_ACTION, payload: { col },
});

// End Sort Voters Action

// Refresh voters Action

export type RefreshVotersRequestAction = Action<string>;

export function isRefreshCarsRequestAction(action: Action<string>) : action is RefreshVotersRequestAction {
  return REFRESH_VOTERS_REQUEST_ACTION === action.type;
}

export interface RefreshVotersDoneAction extends Action<string> {
  payload: { voters: Voter[] }
}

export function isRefreshVotersDoneAction(action: Action<string>) : action is RefreshVotersDoneAction {
  return REFRESH_VOTERS_DONE_ACTION === action.type;
}

export const createRefreshVotersRequestAction : () => RefreshVotersRequestAction = () => ({
    type:REFRESH_VOTERS_REQUEST_ACTION
});

export const createRefreshVotersDoneAction : (voters: Voter[]) => RefreshVotersDoneAction = (voters) => ({
    type:REFRESH_VOTERS_DONE_ACTION, payload: { voters }
});

export const refreshVoters = () => {
    return async (dispatch: Dispatch) => {

      dispatch(createRefreshVotersRequestAction());

      const res = await fetch('http://localhost:3060/voters');
      const voters = await res.json();

      dispatch(createRefreshVotersDoneAction(voters));

    };
};

// End Refresh voters Action


export const appendVoter = (voter: NewVoter) => {

    return async (dispatch: Dispatch) => {

      dispatch(createAppendVoterAction(voter));

      await fetch('http://localhost:3060/voters', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(voter),
      });

      refreshVoters()(dispatch);
    };
};


export const editVoter = (voter: Voter) => {

    return async (dispatch: Dispatch) => {

      dispatch(createReplaceVoterAction(voter));

      await fetch(`http://localhost:3060/voters/${voter.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(voter),
      });

      refreshVoters()(dispatch);
    };
};

export const deleteVoter = (voterId: number) => {

    return async (dispatch: Dispatch) => {

      dispatch(createRemoveVoterAction(voterId));

      await fetch(`http://localhost:3060/voters/${voterId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });

      refreshVoters()(dispatch);
    };
};