import { Voter } from './Voter';
import { VotersSort } from './VoterTool';

import { Election } from '../elections/Election';

export type VoterToolState = {
    votersSort: VotersSort,
    editVoterId: number,
    voters: Voter[],
    elections: Election[],
}
