import { Action } from 'redux';

import { Voter, NewVoter, VoterKeys } from '../models/Voter';

export const APPEND_VOTER_ACTION = 'APPEND_VOTER';
export const REPLACE_VOTER_ACTION = 'REPLACE_VOTER';
export const REMOVE_VOTER_ACTION = 'REMOVE_VOTER';
export const EDIT_VOTER_ACTION = 'EDIT_VOTER';
export const CANCEL_VOTER_ACTION = 'CANCEL_VOTER';
export const SORT_VOTERS_ACTION = 'SORT_VOTERS';

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
