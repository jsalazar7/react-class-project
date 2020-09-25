import React from 'react';
import { Election } from '../../models/elections/Election';

export type CreateElectionViewRowProps = {
    election: Election,
};

export function CreateElectionQuestionsViewRow({election}: CreateElectionViewRowProps) {

    return (
        <>
            <tr>
                <td>{election.id}</td>
                <td>{election.title}</td>
                <td>{election.voters.length}</td>
                <td><button>Hide Votes</button></td>
            </tr>
            {election.questions.map(question => 
                <tr>
                    <td>{question.id}</td>
                    <td>{question.question}</td>
                    <td>{question.yes}</td>
                </tr>
            )}
        </ >
    );

}