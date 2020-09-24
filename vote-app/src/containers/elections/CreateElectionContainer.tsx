import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import * as ElectionToolActions  from '../../actions/elections/ElectionsActions';

import { Election } from '../../models/elections/Election';
import { VoterToolState } from '../../models/voters/VoterToolState';
import { CreateElectionTool } from '../../components/elections/CreateElectionTool';


export function CreateElectionContainer() {

    const elections = useSelector<VoterToolState, Election[]>(state => state.elections);

    const boundActions = bindActionCreators({
        onAddElection: ElectionToolActions.createAppendElectionAction,
    }, useDispatch());

    return <CreateElectionTool {...boundActions} elections={elections} />;

}