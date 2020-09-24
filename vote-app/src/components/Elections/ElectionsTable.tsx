import React from 'react';
import { Election } from '../../models/elections/Election'
import {ElectionViewRow} from './ElectionViewRow'

export type ElectionsTableProps = {
    elections: Election[],
};

export function ElectionsTable(props: ElectionsTableProps) {

    return (
        <table>
            <thead><tr>
                <th>Id</th>
                <th>Title</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.elections.map(election => {
                        <ElectionViewRow
                            key={election.id}
                            election={election}
                            //onVote={(id)=>{}}
                        />
                    })
                }
            </tbody>
        </table>
    );
}