import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import * as ElectionToolActions  from '../../actions/elections/ElectionsActions';

import { Election } from '../../models/elections/Election';
import { VoterToolState } from '../../models/voters/VoterToolState';
import { Elections } from '../../components/elections/Elections';

export function DisplayElectionsContainer() {

    const elections = useSelector<VoterToolState, Election[]>(state => state.elections);
    const electionId = useSelector<VoterToolState, number>(state => state.currentElectionId);

    const dispatch = useDispatch();

    const boundActions = bindActionCreators({
        onSelectElection: ElectionToolActions.creatSelectElectionAction,
        onCastBallot: ElectionToolActions.createUpdateElectionAction
    }, dispatch);

    useEffect(() => {
        dispatch(ElectionToolActions.refreshElections());
      }, [dispatch]);

    return <Elections
                {...boundActions}
                elections={elections}
                currentElection={electionId}
            />

}
