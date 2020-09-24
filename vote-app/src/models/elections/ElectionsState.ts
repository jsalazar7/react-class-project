import { Election } from './Election';

export type ElectionsState = {
    elections: Election[],
    currentElection: number,
};
