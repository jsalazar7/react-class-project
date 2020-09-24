import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import * as VoterToolActions  from '../actions/voterToolActions';

import { Voter } from '../models/Voter';
import { VotersSort } from '../models/VoterTool';
import { VoterToolState } from '../models/VoterToolState';
import { VoterTool } from '../components/voters/VoterTool';

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


export function VoterToolContainer() {

    const voters = useSelector<VoterToolState, Voter[]>(state => sortedVoters(state.voters, state.votersSort));
    const editVoterId = useSelector<VoterToolState, number>(state => state.editVoterId);
    const votersSort = useSelector<VoterToolState, VotersSort>(state => state.votersSort);

    const boundActions = bindActionCreators({
        onAddVoter: VoterToolActions.createAppendVoterAction,
        onSaveVoter: VoterToolActions.createReplaceVoterAction,
        onDeleteVoter: VoterToolActions.createRemoveVoterAction,
        onEditVoter: VoterToolActions.createEditVoterAction,
        onCancelVoter: VoterToolActions.createCancelVoterAction,
        onSortVoters: VoterToolActions.createSortVotersAction,
    }, useDispatch());

    return <VoterTool {...boundActions} voters={voters} editVoterId={editVoterId} votersSort={votersSort} />;

}
