import React from 'react';
import { Election } from '../../models/elections/Election'
import { CreateElectionViewRow } from './CreateElectionViewRow'
import { CreateElectionQuestionsViewRow } from './CreateElectionQuestionsViewRow';

export type ElectionsTableProps = {
    elections: Election[],
    shownElectionId: number,
    onShowElection: (electionId: number) => void,
};

export function CreateElectionsTable(props: ElectionsTableProps) {

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Total Votes</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    props.elections.map(election => election.id !== props.shownElectionId ?
                        <CreateElectionViewRow
                            key={election.id}
                            election={election}
                            shownElectionId={props.shownElectionId}
                            onShowElection={props.onShowElection}
                        /> :
                        <CreateElectionQuestionsViewRow
                            key={election.id}
                            election={election}
                            shownElectionId={props.shownElectionId}
                            onShowElection={props.onShowElection}
                        />
                    )
                }
            </tbody>
        </table>
    );
}