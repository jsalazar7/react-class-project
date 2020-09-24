import { useState } from 'react';

import { Voter } from '../models/Voter';
import { VotersSort, VoterFormData, VoterToolStore } from '../models/VoterTool';
import { useList } from '../hooks/useList';

// computed value
const sortedVoters = (voters: Voter[], votersSort: VotersSort) => {
    // we will improve the typing of this code as part of class tomorrow...
    // return voters.concat().sort( (a: any, b: any) => {
    return voters.concat().sort( (a: Voter, b: Voter) => {

        const left = String(a[votersSort.col]).toUpperCase();
        const right = String(b[votersSort.col]).toUpperCase();

        if (left < right) {
            return votersSort.dir === 'asc' ? -1 : 1;
        } else if (left > right) {
            return votersSort.dir === 'asc' ? 1 : -1;
        } else {
            return 0;
        }
    });
}



type UseVoterToolStore = (initialVoters: Voter[]) => VoterToolStore;

// Store - contains both the state data and stateful logic for updating the data
export const useVoterToolStore: UseVoterToolStore = (initialVoters) => {

    // Application State - Data
    const [ votersSort, setVotersSort ] = useState<VotersSort>({
        col: 'id',
        dir: 'asc',
    });
    const [ editVoterId, setEditVoterId ] = useState(-1);
    const [ voters, appendVoter, replaceVoter, removeVoter ] =
        useList<Voter>([ ...initialVoters ]);

    // Application Stateful Logic - Functions/Logic
    const addVoter = (voterForm: VoterFormData) => {
        appendVoter(voterForm);
        setEditVoterId(-1);
    };

    const saveVoter = (voter: Voter) => {
        replaceVoter(voter);
        setEditVoterId(-1);
    };

    const deleteVoter = (voterId: number) => {
        removeVoter(voterId);
        setEditVoterId(-1);
    };

    const cancelVoter = () => {
        setEditVoterId(-1);
    };

    // const sortVoters = (col: string) => {
    // const sortVoters = (col: VoterKeys) => {
    const sortVoters = (col: keyof Voter) => {

        if (col === votersSort.col) {
            setVotersSort({
                col, dir: 'asc' === votersSort.dir ? 'desc' : 'asc',
            })
        } else {
            setVotersSort({
                col, dir: 'asc',
            });
        }

    };

    return {
        sortedVoters: sortedVoters(voters, votersSort),
        editVoterId,
        votersSort,
        addVoter,
        saveVoter,
        deleteVoter,
        editVoter: setEditVoterId,
        cancelVoter,
        // sortVoters: sortVoters,
        sortVoters,
    };


}
