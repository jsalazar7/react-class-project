import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import * as ElectionToolActions from '../../actions/elections/ElectionsActions';
import {refreshVoters} from'../../actions/voters/voterToolActions';

import { Election } from '../../models/elections/Election';
import { VoterToolState } from '../../models/voters/VoterToolState';
import { Elections } from '../../components/elections/Elections';
import { Voter } from '../../models/voters/Voter';

export function DisplayElectionsContainer() {

    const elections = useSelector<VoterToolState, Election[]>(state => state.elections);
    const electionId = useSelector<VoterToolState, number>(state => state.currentElectionId);
    const authenticatedVoterId = useSelector<VoterToolState, number>(state => state.authenticatedVoterId);
    const voters = useSelector<VoterToolState, Voter[]>(state => state.voters);
    const errorId = useSelector<VoterToolState, number>(state => state.errorId);

    const dispatch = useDispatch();

    const boundActions = bindActionCreators({
        onSelectElection: ElectionToolActions.creatSelectElectionAction,
        onCastBallot: ElectionToolActions.updateElection,
        onVerifyVoter: ElectionToolActions.createVerifyVoterAction,
        onUpdateError: ElectionToolActions.createUpdateErrorAction,
    }, dispatch);

    useEffect(() => {
        dispatch(ElectionToolActions.refreshElections());
        dispatch(refreshVoters());
      }, [dispatch]);

    return <Elections
                {...boundActions}
                elections={elections}
                currentElection={electionId}
                authenticatedVoterId={authenticatedVoterId}
                voters={voters}
                errorId={errorId}
            />

}
