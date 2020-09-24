import React from 'react';

import { ToolHeader } from '../ToolHeader';
// import { ElectionTable } from '../../models/ElectionTable';
import { ElectionForm } from './CreateElectionForm';

import { Election, NewElection, ElectionKeys } from '../../models/elections/Election';

export type ElectionToolProps = {
    elections: Election[],
    onAddElection: (election: NewElection) => void,
}

export function CreateElectionTool(props: ElectionToolProps) {

    return (
        <>
            <ToolHeader headerText="Election Tool" />
            {/* <ElectionTable elections={props.elections} /> */}
            <ElectionForm buttonText="Add Election" onSubmitElection={props.onAddElection} />
        </>
    );
}
