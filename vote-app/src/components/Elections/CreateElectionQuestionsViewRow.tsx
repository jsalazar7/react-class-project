import React from 'react';
import { Election } from '../../models/elections/Election';

export type CreateElectionViewRowProps = {
    election: Election,
    shownElectionId: number,
    onShowElection: (electionId: number) => void,
};

export function CreateElectionQuestionsViewRow({election, shownElectionId, onShowElection}: CreateElectionViewRowProps) {

    const hideElection = () => {
        onShowElection(-1);
    }

    return (
        <>
            <tr>
                <td>{election.id}</td>
                <td>{election.title}</td>
                <td>{election.voters.length}</td>
                <td><button onClick={hideElection}>Hide Results</button></td>
            </tr>
            <tr><td>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Question</th>
                            <th>Yes</th>
                            <th>No</th>
                        </tr>
                    </thead>
                    <tbody>
                        {election.questions.map(question =>
                            <tr key={question.id}>
                                <td>{question.id}</td>
                                <td>{question.question}</td>
                                <td>{question.yes}</td>
                                <td>{election.voters.length - question.yes}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </td></tr>
        </ >
    );

}