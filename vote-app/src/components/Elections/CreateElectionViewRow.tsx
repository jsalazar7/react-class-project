import React from 'react';
import { Election } from '../../models/elections/Election';

export type CreateElectionViewRowProps = {
    election: Election,
    shownElectionId: number,
    onShowElection: (electionId: number) => void,
};

export function CreateElectionViewRow({election, shownElectionId, onShowElection}: CreateElectionViewRowProps) {

    const showElection = () => {
        onShowElection(election.id);
    }

    return (
    <>
        <tr>
            <td>{election.id}</td>
            <td>{election.title}</td>
            <td>{election.voters.length}</td>
            <td><button onClick={showElection}>Show Votes</button></td>
        </tr>
        <tr>
            {election.id === shownElectionId ?
                <tr>
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
                                <tr>
                                    <td>{question.id}</td>
                                    <td>{question.question}</td>
                                    <td>{question.yes}</td>
                                    <td>{election.voters.length - question.yes}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </tr>
                : <></>
            }
        </tr>
    </>
    );

}