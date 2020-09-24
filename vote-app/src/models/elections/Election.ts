import React from 'react';

export type Election = {
    id: number,
    title: string,
    questions: QuestionEntry[],
    voters: number[],
}

export type QuestionEntry = {
    id: number,
    question: string,
    yes: number, // Total number of 'yes' responses
}

export type ElectionKeys = 'id' | 'title' | 'questions';
export type NewElection = Omit<Election, 'id'>;