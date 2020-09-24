
import React from 'react';
import { useForm } from '../../hooks/useForm';


export type VoterAuthFormProps = {
    onVerifyVoter: (id: number) => void,
};

export function VoterAuthForm({onVerifyVoter}: VoterAuthFormProps) {

    const [ voterForm, change, resetVoterForm ] = useForm ({
        id: 0
    });

    const submitVoter = () => {
        onVerifyVoter(voterForm.id);
        resetVoterForm();
    };

    return (
        <form>
            <ul>
            <li>
                <label>
                    What is your voter ID?:
                    <input type="text" name="id"
                           value={voterForm.id} onChange={change} />
                </label>
            </li>
            <button type="button" onClick={submitVoter}>Verify</button>
            </ul>
        </form>
    );
}
