import React from 'react';
import { Election, QuestionEntry } from '../../models/elections/Election';

export type BallotRowProps = {
    question: QuestionEntry,
    onVote: (questionId: number, checked: boolean) => void,
};

export function BallotRow(props: BallotRowProps) {

    return (
        <tr>
            <td>{props.question.id}</td>
            <td>{props.question.question}</td>
            <td>
                <input type="checkbox"
                        onChange={(e) => props.onVote(props.question.id, e.target.checked)}
                />
            </td>
        </tr>
    );

}