import { useState } from 'react';

import { Voter } from '../models/voters/Voter';
import { VoterFormData } from '../models/voters/VoterTool';

type UseVoterList = (initialVoters: Voter[]) => ([ Voter[], (voterForm: VoterFormData) => void, (voter: Voter) => void, (voterId: number) => void ]);

export const useVoterList: UseVoterList = (initialVoters: Voter[]) => {

    const [ voters, setVoters ] = useState([ ...initialVoters ]);

    const addVoter = (voterForm: VoterFormData) => {

        setVoters(voters.concat({
            ...voterForm,
            id: Math.max(...voters.map(c => c.id), 0) + 1,
        }));
    };

    const saveVoter = (voter: Voter) => {
        const voterIndex = voters.findIndex(c => c.id === voter.id);
        if (voterIndex >= 0) {
            const newVoters = voters.concat();
            newVoters[voterIndex] = voter;
            setVoters(newVoters);
        }
    };

    const deleteVoter = (voterId: number) => {
        setVoters(voters.filter(c => c.id !== voterId));
    };

    return [ voters, addVoter, saveVoter, deleteVoter ];

};
