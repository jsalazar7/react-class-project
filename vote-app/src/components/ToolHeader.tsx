import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './ToolHeader.css';
import {Link} from "react-router-dom";
import logo from '../assets/team-logo.png';

export type ToolHeaderProps = {
    headerText: string,
}

export function ToolHeader(props: ToolHeaderProps) {

    return (
        <header>
            <div id="link">
            <Link to={"/"}>Home</Link>
            </div>
            <br></br>
            <img src={logo} alt="Logo" />
            <div>
            <h4>Team: Vote Nin-JS</h4>
            <h5>JS Do It</h5>
            </div>
            <Jumbotron>
                <h1>{props.headerText}</h1>
            </Jumbotron>
        </header>
    );
}


