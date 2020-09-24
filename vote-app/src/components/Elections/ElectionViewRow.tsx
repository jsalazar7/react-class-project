
import React from 'react';
import { Election } from '../../models/elections/Election';

export type ElectionViewRowProps = {
    election: Election,
    //onVote: (electionId: number) => void,
};

export function ElectionViewRow({election}: ElectionViewRowProps) {

    return (
        <tr>
            <td>{election.id}</td>
            <td>{election.title}</td>
            <td>
                <button type="button">Vote</button>
                        {/* onClick={() => onVote(election.id)}>Vote</button> */}
            </td>
        </tr>
    );

}
