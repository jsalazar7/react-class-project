
import React, { useState } from 'react';

import { useForm } from '../../hooks/useForm';
import { NewElection, QuestionEntry } from '../../models/elections/Election';

export type ElectionFormProps = {
    buttonText: string,
    onSubmitElection: (electionForm: NewElection) => void,
};

export function CreateElectionForm(props: ElectionFormProps) {
    
    // Handles changing the form inputs
    const [ electionForm, change, resetElectionForm, resetInputOnForm ] = useForm ({
        title: '', questionText: '',
    });

    const [ questions, setQuestions ] = useState ([] as QuestionEntry[]);

    // Handles changing the displayed questions
    const addQuestion = () => {
        setQuestions(questions.concat({
            id: Math.max(...questions.map(c => c.id), 0) + 1,
            question: electionForm.questionText,
            yes: 0,
        }))
        resetInputOnForm('questionText');
    }

    // For submitting the election and all of its questions
    const submitElection = () => {

        props.onSubmitElection({
            title: electionForm.title,
            questions: questions,
            voters: [],
        });
        resetElectionForm();
        setQuestions([]); // Reset the displayed questions as well
    };

    return (
        <form>
            <ul>
                <li>
                    <label>
                        Title
                        <input type="text" name="title"
                                value={electionForm.title} onChange={change} />
                    </label>
                </li>
                <li>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Text</th>
                            </tr>
                        </thead>
                        <tbody>
                            {questions.map(question => 
                                <tr>
                                    <td>{question.id}</td>
                                    <td>{question.question}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <label>
                        Question: 
                        <input type="text" name="questionText"
                                value={electionForm.questionText} onChange={change} />
                    </label>
                    <button type="button" onClick={addQuestion}>Add</button>
                </li>
                <li>
                    <button type="button" onClick={submitElection}>{props.buttonText}</button>
                </li>
            </ul>
        </form>
    );
}
