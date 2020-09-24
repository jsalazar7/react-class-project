
import React from 'react';

import { Voter } from '../../models/voters/Voter';
import { nanToString } from '../../utils';

export type VoterViewRowProps = {
    voter: Voter,
    onEditVoter: (voterId: number) => void,
    onDeleteVoter: (voterId: number) => void,
};

export function VoterViewRow(props: VoterViewRowProps) {

    return (
        <tr>
            <td>{props.voter.id}</td>
            <td>{props.voter.firstName}</td>
            <td>{props.voter.lastName}</td>
            <td>{props.voter.address}</td>
            <td>{props.voter.city}</td>
            <td>{nanToString(props.voter.birthday)}</td>
            <td>{props.voter.email}</td>
            <td>{nanToString(props.voter.phone)}</td>
            <td>
                <button type="button"
                        onClick={() => props.onEditVoter(props.voter.id)}>Edit</button>
                <button type="button"
                        onClick={() => props.onDeleteVoter(props.voter.id)}>Delete</button>
            </td>
        </tr>
    );

}
