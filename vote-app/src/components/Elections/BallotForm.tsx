
import React from 'react';
import { useForm } from '../../hooks/useForm';
import { Election } from '../../models/elections/Election';
import { BallotRow } from './BallotRow';
import {ToolHeader} from "../ToolHeader";
import { Route } from 'react-router-dom'

export type BallotFormProps = {
    election: Election,
    voterId: number,
    onCastVote: (election: Election) => void,
};

export function BallotForm(props: BallotFormProps) {

    const [ ballotForm, change, reset, resetOne, setInputOnForm ] = useForm ({
        ...props,
        votes: Array<number>(props.election.questions.length).fill(0)
    });

    const submitVote = () => {
        props.onCastVote(ballotForm.election);
        reset();
    };


    const onChoseQuestionResponse = (id:number, vote:boolean) => {
        //ballotForm.election.questions.map
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
            <button type="button" onClick={() => history.push('/')}>Cancel</button>
        </form>
    )}/>);
}
