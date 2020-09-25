
import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { Election } from '../../models/elections/Election';
import { BallotRow } from './BallotRow';
import {ToolHeader} from "../ToolHeader";
import { Route } from 'react-router-dom'

export type BallotFormProps = {
    election: Election,
    voterId: number,
    onCastVote: (election: Election) => void,
    onCancel: () => void
};

export function BallotForm(props: BallotFormProps) {

    const [ ballotForm, change, reset, resetOne, setInputOnForm ] = useForm ({
        ...props,
    });

    const [ ballotVotes, setBallotVotes ] = useState(Array<number>(props.election.questions.length).fill(0));

    const submitVote = () => {
        let newElection = {...ballotForm.election};
        newElection.questions.map(question => {
            if (ballotVotes[question.id - 1] === 1) {
                question.yes += 1;
            }
            return question;
        });
        newElection.voters.push(Number(props.voterId));
        props.onCastVote(ballotForm.election);
        reset();
        props.onCancel();
    };

    const onChoseQuestionResponse = (id:number, vote:boolean) => {
        let newBallotVotes = ballotVotes.concat();

        // The vote is either a 1 if the box is checked or 0 if not
        newBallotVotes[id-1] = vote ? 1 : 0; 
        setBallotVotes(newBallotVotes);
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
                            onVote={onChoseQuestionResponse}
                        />
                    )
                }
                </tbody>
            </table>
            <button type="button" onClick={submitVote}>Submit</button>
            <button type="button" onClick={() => {props.onCancel();history.push('/');}}>Cancel</button>
        </form>
    )}/>);
}
