import React from 'react';

import { ToolHeader } from '../ToolHeader';
import { VoterTable } from './VoterTable';
import { VoterForm } from './VoterForm';

import { Voter, NewVoter, VoterKeys } from '../../models/voters/Voter';
import { VotersSort } from '../../models/voters/VoterTool';
/*
import { Elections } from  '../elections/Elections';
import { VoterAuthForm } from  '../elections/VoterAuthForm';
 */

export type VoterToolProps = {
    voters: Voter[],
    editVoterId: number,
    votersSort: VotersSort,
    onAddVoter: (voter: NewVoter) => void,
    onSaveVoter: (voter: Voter) => void,
    onDeleteVoter: (voterId: number) => void,
    onEditVoter: (voterId: number) => void,
    onCancelVoter: () => void,
    onSortVoters: (col: VoterKeys) => void,
}

export function VoterTool(props: VoterToolProps) {

    const {
        voters, editVoterId, votersSort,
        onAddVoter: addVoter,
        onSaveVoter: saveVoter,
        onDeleteVoter: deleteVoter,
        onEditVoter: editVoter,
        onCancelVoter: cancelVoter,
        onSortVoters: sortVoters,
    } = props;

    return (
        <>
            <ToolHeader headerText="Voter Tool" />
            <VoterTable voters={voters} votersSort={votersSort} editVoterId={editVoterId}
                      onEditVoter={editVoter} onDeleteVoter={deleteVoter}
                      onSaveVoter={saveVoter} onCancelVoter={cancelVoter}
                      onSortVoters={sortVoters} />
            <VoterForm buttonText="Add Voter" onSubmitVoter={addVoter} />
        </>
    );
}
