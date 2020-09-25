import React from 'react';
import { ElectionsTable } from './ElectionsTable';
import { BallotForm } from './BallotForm';
import { Election } from '../../models/elections/Election';
import { Ballot } from '../../models/elections/Ballot';

export type ElectionsProps = {
    elections: Election[],
    currentElection: number,
    onSelectElection: (id:number) => void,
    onCastBallot: (ballot: Ballot) => void,
};

export function Elections(props:ElectionsProps) {

    return (
        <>
         {
            props.currentElection === 0 ?
            <ElectionsTable
                elections={props.elections}
                onSelectElection={props.onSelectElection}
            />
            :
            <BallotForm
                election={props.elections[props.currentElection-1]}
                onCastVote={props.onCastBallot}
            />
         }
        </>
    );

}