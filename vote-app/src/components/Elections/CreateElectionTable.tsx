import React from 'react';
import { Election } from '../../models/elections/Election'
import { CreateElectionViewRow } from './CreateElectionViewRow'
import { CreateElectionQuestionsViewRow } from './CreateElectionQuestionsViewRow'

export type ElectionsTableProps = {
    elections: Election[],
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
                    props.elections.map(election =>
                        <CreateElectionViewRow
                            key={election.id}
                            election={election}
                            showElectionId={1}
                        />)
                }
            </tbody>
        </table>
    );
}