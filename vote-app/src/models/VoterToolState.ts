import { Voter } from './Voter';
import { VotersSort } from './VoterTool';

export type VoterToolState = {
    votersSort: VotersSort,
    editVoterId: number,
    voters: Voter[],
}
