import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import * as VoterToolActions  from '../../actions/voters/voterToolActions';

import { Voter } from '../../models/voters/Voter';
import { VotersSort } from '../../models/voters/VoterTool';
import { VoterToolState } from '../../models/voters/VoterToolState';
import { VoterTool } from '../../components/voters/VoterTool';

const sortedVoters = (voters: Voter[], votersSort: VotersSort) => {

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

    const dispatch = useDispatch();

    const boundActions = bindActionCreators({
        onAddVoter: VoterToolActions.appendVoter,
        onSaveVoter: VoterToolActions.editVoter,
        onDeleteVoter: VoterToolActions.deleteVoter,
        onEditVoter: VoterToolActions.createEditVoterAction,
        onCancelVoter: VoterToolActions.createCancelVoterAction,
        onSortVoters: VoterToolActions.createSortVotersAction,
    }, dispatch);

    useEffect(() => {
        dispatch(VoterToolActions.refreshVoters())
      }, [dispatch]);

    return <VoterTool {...boundActions} voters={voters} editVoterId={editVoterId} votersSort={votersSort} />;

}
