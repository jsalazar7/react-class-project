import React from 'react';
import { Election } from '../../models/elections/Election'
import { ElectionViewRow } from './ElectionViewRow'
import { ToolHeader } from '../ToolHeader';

export type ElectionsTableProps = {
    elections: Election[],
    onSelectElection: (id:number) => void,
};

export function ElectionsTable(props: ElectionsTableProps) {

    return (
        <>
        <ToolHeader headerText="Elections" />
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.elections.map(election =>
                        <ElectionViewRow
                            key={election.id}
                            election={election}
                            onVote={props.onSelectElection}
                        />)
                }
            </tbody>
        </table>
        </>
    );
}