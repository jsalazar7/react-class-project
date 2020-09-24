import React from 'react';
import { ToolHeader } from '../ToolHeader';
import { ElectionsTable } from './ElectionsTable';


// TODO: Pull data from REST API
const elections = [
    {
        id: 1,
        title: "Animal Election",
        questions: [
            {
                id: 1,
                question: "Do you like dogs?",
                yes: 1
            },
            {
                id: 2,
                question: "Do you like cats?",
                yes: 0
            },
            {
                id: 3,
                question: "Do you like snakes?",
                yes: 1
            },
        ],
        voters: [
            1, 2
        ]
    },
    {
        id: 2,
        title: "Food Election",
        questions: [
            {
                id: 1,
                question: "Do you like pizza?",
                yes: 1
            },
            {
                id: 2,
                question: "Do you like burritos?",
                yes: 0
            },
            {
                id: 3,
                question: "Do you like sushi?",
                yes: 1
            },
        ],
        voters: [
        ]
    },
];

export function Elections() {

    return (
        <>
            <ToolHeader headerText="Elections" />
            <ElectionsTable
                elections={elections}
            />
        </>
    );

}