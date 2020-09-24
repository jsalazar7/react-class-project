
import React from 'react';

import { nanToString } from '../../utils';
import { useForm } from '../../hooks/useForm';
import { VoterFormData } from '../../models/voters/VoterTool';

import './VoterTool.css';

export type VoterFormProps = {
    buttonText: string,
    onSubmitVoter: (voterForm: VoterFormData) => void,
};

export function VoterForm(props: VoterFormProps) {

    const [ voterForm, change, resetVoterForm ] = useForm ({
        firstName: '', lastName: '', address: '', city: '', birthday: 0, email: '', phone: 0,
    });

    const submitVoter = () => {
        props.onSubmitVoter({
            ...voterForm,
        });
        resetVoterForm();
    };

    return (
        <form>
            <ul>
            <li>
                <label>
                    First Name
                    <input type="text" name="firstName"
                           value={voterForm.firstName} onChange={change} />
                </label>
            </li>
            <li>
                <label>
                    Last Name
                    <input type="text" name="lastName"
                           value={voterForm.lastName} onChange={change} />
                </label>
            </li>
            <li>
                <label>
                    Address
                    <input type="text" name="address"
                           value={voterForm.address} onChange={change} />
                </label>
            </li>
            <li>
                <label>
                    City
                    <input type="text" name="city"
                           value={voterForm.city} onChange={change} />
                </label>
            </li>
            <li>
                <label>
                    Birthday
                    <input type="number" name="birthday"
                           value={nanToString(voterForm.birthday)} onChange={change} />
                </label>
            </li>
            <li>
                <label>
                    Email
                    <input type="text" name="email"
                           value={voterForm.email} onChange={change} />
                </label>
            </li>
            <li>
                <label>
                    Phone
                    <input type="number" name="phone"
                           value={nanToString(voterForm.phone)} onChange={change} />
                </label>
            </li>
            <button type="button" onClick={submitVoter}>{props.buttonText}</button>
            </ul>
        </form>
    );
}
