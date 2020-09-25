import React from 'react';
import { ElectionsTable } from './ElectionsTable';
import { BallotForm } from './BallotForm';
import { Election } from '../../models/elections/Election';
import { VoterAuthForm } from './VoterAuthForm';
import { Voter } from '../../models/voters/Voter';
import {Link} from "react-router-dom";

export type ElectionsProps = {
    elections: Election[],
    currentElection: number,
    authenticatedVoterId: number,
    voters: Voter[],
    errorId: number,

    onSelectElection: (id:number) => void,
    onCastBallot: (election: Election) => void,
    onVerifyVoter: (voterId: number) => void,
    onUpdateError: (errorId:number) => void,
};

export function Elections(props:ElectionsProps) {

    const verifyVoter = (id: number) => {

        if (!props.voters.find(v => v.id === id)) {
            props.onUpdateError(1);
        }
        else if (props.elections.find(e => e.id === props.currentElection && e.voters.find(v => v === id))){
            props.onUpdateError(2);
        }
        else {
            props.onVerifyVoter(id);
        }
    };

    // Default case, no election is selected yet.
    let result =
        <ElectionsTable
            elections={props.elections}
            onSelectElection={props.onSelectElection}
        />;

    if (props.currentElection !== 0) {

        if (props.authenticatedVoterId === 0 && props.errorId === 0) {
            // No one has authenticated, election selected
            result =
                <VoterAuthForm
                    onVerifyVoter={verifyVoter}
                />
        }
        else if  (props.errorId === 1) {
            result =
                <>
                <label>No voter was found with that id!</label>
                <div>
                    <Link onClick={()=>{props.onUpdateError(0)}} to={"/elections"}>Select Election</Link>
                </div>
                <div>
                    <Link onClick={()=>{props.onUpdateError(0)}} to={"/"}>Home</Link>
                </div>
                </>
        }
        else if  (props.errorId === 2) {
            result =
                <>
                <label>Voter has already cast a ballot!</label>
                <div>
                    <Link onClick={()=>{props.onUpdateError(0)}} to={"/elections"}>Select Election</Link>
                </div>
                <div>
                    <Link onClick={()=>{props.onUpdateError(0)}} to={"/"}>Home</Link>
                </div>
                </>
        }
        else {
            // Election selected, valid user
            result =
                <BallotForm
                    election={props.elections[props.currentElection-1]}
                    voterId={props.authenticatedVoterId}
                    onCastVote={props.onCastBallot}
                />
        }
    }

    return result;
}
