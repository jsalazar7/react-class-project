
import React from 'react';
import { useForm } from '../../hooks/useForm';
import { Ballot } from '../../models/elections/Ballot';
import { Election } from '../../models/elections/Election';
import { BallotRow } from './BallotRow';
import {ToolHeader} from "../ToolHeader";
import { Route } from 'react-router-dom'

export type BallotFormProps = {
    election: Election,
    onCastVote: (ballot: Ballot) => void,
};

export function BallotForm(props: BallotFormProps) {

    const [ ballotForm, change, reset ] = useForm ({
        electionId: 0, voterId: 0, votes: [],
    });

    const submitVote = () => {
        props.onCastVote({...ballotForm});
        reset();
    };


    return (
        <Route render={({ history}) => (
        <form>
            <ToolHeader headerText="Ballot Voting" />
            <table>
                <thead>
                    <tr>
                        <th>{props.election.title}</th>
                    </tr>
                </thead>
                <tbody>
                {
                    props.election.questions.map(question =>
                        <BallotRow
                            key={`${props.election.id}-${question.id}`}
                            question={question}
                            onVote={(id, s)=>{console.log(`Question: ${id} - ${s}`)}}
                        />

                    )
                }
                </tbody>
            </table>
            <button type="button" onClick={submitVote}>Submit</button>
            <button type="button" onClick={() => {reset();history.push('/');}}>Cancel</button>
        </form>
    )}/>);
}
