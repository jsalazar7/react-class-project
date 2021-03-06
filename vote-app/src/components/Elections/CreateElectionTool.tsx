import React from 'react';

import { ToolHeader } from '../ToolHeader';
import { CreateElectionsTable } from './CreateElectionTable';
import { CreateElectionForm } from './CreateElectionForm';

import { Election, NewElection } from '../../models/elections/Election';

export type ElectionToolProps = {
    elections: Election[],
    shownElectionId: number,
    onAddElection: (election: NewElection) => void,
    onShowElection: (electionId: number) => void,
}

export function CreateElectionTool(props: ElectionToolProps) {

    return (
        <>
            <ToolHeader headerText="Election Tool" />
            <CreateElectionsTable elections={props.elections} shownElectionId={props.shownElectionId} onShowElection={props.onShowElection}/>
            <CreateElectionForm buttonText="Add Election" onSubmitElection={props.onAddElection} />
        </>
    );
}
