import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

export type ToolHeaderProps = {
    headerText: string,
}

export function ToolHeader(props: ToolHeaderProps) {

    return  (
        <header>
            <Jumbotron>
                <h1>{props.headerText}</h1>
            </Jumbotron>
        </header>
    );
}
