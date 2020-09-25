import React from 'react';

import { Voter } from '../../models/voters/Voter';
import { VotersSort } from '../../models/voters/VoterTool';

import { VoterEditRow } from './VoterEditRow';
import { VoterViewRow } from './VoterViewRow';

import './VoterTool.css';

import { FaBeer } from 'react-icons/fa';

import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

export type VoterTableProps = {
    voters: Voter[],
    editVoterId: number,
    votersSort: VotersSort,
    onEditVoter: (voterId: number) => void,
    onDeleteVoter: (voterId: number) => void,
    onSaveVoter: (voter: Voter) => void,
    onCancelVoter: () => void,
    onSortVoters: (col: keyof Voter) => void,
};

type ColHeaderProps = {
    votersSort: VotersSort,
    col: keyof Voter,
    caption: string,
    onClick: (col: keyof Voter) => void,
}

function ColHeader(props: ColHeaderProps) {
    const icon = props.votersSort.dir === 'asc' ? <AiOutlineArrowDown/> : <AiOutlineArrowUp/> ;
    return (
        <th onClick={() => props.onClick(props.col)}>
            {props.caption}
            {props.votersSort.col === props.col && <span>{icon}</span>}
        </th>
    );
}

// can be reused anywhere
// presentational component - ui-only, no knowledge of the application itself
export function VoterTable({
                             voters, editVoterId, votersSort,
                             onEditVoter: editVoter,
                             onDeleteVoter: deleteVoter,
                             onSaveVoter: saveVoter,
                             onCancelVoter: cancelVoter,
                             onSortVoters: sortVoters,
                         }: VoterTableProps) {

    return (
        <table>
            <thead>
            <tr>
                <ColHeader votersSort={votersSort} col="id" caption="Id" onClick={sortVoters} />
                <ColHeader votersSort={votersSort} col="firstName" caption="First Name" onClick={sortVoters} />
                <ColHeader votersSort={votersSort} col="lastName" caption="Last Name" onClick={sortVoters} />
                <ColHeader votersSort={votersSort} col="address" caption="Address" onClick={sortVoters} />
                <ColHeader votersSort={votersSort} col="city" caption="City" onClick={sortVoters} />
                <ColHeader votersSort={votersSort} col="birthday" caption="Birthday" onClick={sortVoters} />
                <ColHeader votersSort={votersSort} col="email" caption="Email" onClick={sortVoters} />
                <ColHeader votersSort={votersSort} col="phone" caption="Phone" onClick={sortVoters} />
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {voters.map(voter => voter.id === editVoterId
                ? <VoterEditRow key={voter.id} voter={voter} onSaveVoter={saveVoter} onCancelVoter={cancelVoter} />
                : <VoterViewRow key={voter.id} voter={voter} onEditVoter={editVoter} onDeleteVoter={deleteVoter} />)}
            </tbody>
        </table>
    );

}
