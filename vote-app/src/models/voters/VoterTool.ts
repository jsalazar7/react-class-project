
import { Voter } from './Voter';

export type VotersSort = {
    // col: string,
    // col: VoterKeys,
    col: keyof Voter,
    dir: string,
}

export type VoterFormData = {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    birthday: number;
    email: string;
    phone: number;
}

export type VoterToolState = {
    sortedVoters: Voter[],
    editVoterId: number,
    votersSort: VotersSort,
}

export type VoterToolActions = {
    addVoter: (voterForm: VoterFormData) => void,
    saveVoter: (voter: Voter) => void,
    deleteVoter: (voterId: number) => void,
    editVoter: (voterId: number) => void,
    cancelVoter: () => void,
    sortVoters: (col: keyof Voter) => void,
}

export type VoterToolStore = VoterToolState & VoterToolActions;
