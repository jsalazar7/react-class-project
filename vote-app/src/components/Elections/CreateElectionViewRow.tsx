import React from 'react';
import { Election } from '../../models/elections/Election';

export type CreateElectionViewRowProps = {
    election: Election,
    showElectionId: number,
};

export function CreateElectionViewRow({election, showElectionId}: CreateElectionViewRowProps) {

    return (
    <>
        <tr>
            <td>{election.id}</td>
            <td>{election.title}</td>
            <td>{election.voters.length}</td>
            <td><button>Show Votes</button></td>
        </tr>
        <tr>
            {election.id === showElectionId ?
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