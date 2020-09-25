import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './ToolHeader.css';
import {Link} from "react-router-dom";

export type ToolHeaderProps = {
    headerText: string,
}

export function ToolHeader(props: ToolHeaderProps) {

    return (
        <header>
            <div id="link">
            <Link to={"/"}>Home</Link>
            </div>
            <Jumbotron>
                <h1>{props.headerText}</h1>
            </Jumbotron>
        </header>
    );
}


