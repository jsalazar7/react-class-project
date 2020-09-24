import React from 'react';

import { Voter } from '../../models/Voter';
import {useForm} from "../../hooks/useForm";

type voterData = {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    birthday: number;
    email: string;
    phone: number;
}


export type VoterEditRowProps = {
    voter: Voter,
    onSaveVoter: (voter: Voter) => void,
    onCancelVoter: () => void,
};

export function VoterEditRow({voter, onSaveVoter, onCancelVoter}: VoterEditRowProps) {

    const [ voterForm, change ] = useForm ({
       ...voter
    }); /* initial value used to initialize the state on the first render */

    const saveVoter = () => {
        onSaveVoter({
            ...voterForm,
            id: voter.id,
        });
    }
    return (
        <tr>
            <td>{voter.id}</td>
            <td><input type="text" name="firstName" value={voterForm.firstName} onChange={change} /></td>
            <td><input type="text" name="lastName" value={voterForm.lastName} onChange={change} /></td>
            <td><input type="text" name="address" value={voterForm.address} onChange={change} /></td>
            <td><input type="text" name="city" value={voterForm.city} onChange={change} /></td>
            <td><input type="number" name="birthday" value={voterForm.birthday} onChange={change} /></td>
            <td><input type="text" name="email" value={voterForm.email} onChange={change} /></td>
            <td><input type="number" name="phone" value={voterForm.phone} onChange={change} /></td>
            <td>
                <button type="button"
                        onClick={(saveVoter)}>Save</button>
                <button type="button"
                        onClick={onCancelVoter}>Cancel</button>
            </td>
        </tr>
    );

}
