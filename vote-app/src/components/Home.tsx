import {ToolHeader} from "./ToolHeader";
import React from "react";
import { Link } from "react-router-dom";
import './voters/VoterTool.css'

export function Home() {

    return (
      <>
          <ToolHeader headerText="Election Home Page" />
          <div>
            <nav>
            <form>
                <ul>
                    <li><Link to={"/voter"}>Voter Registration</Link></li>
                    <li><Link to={"/createElections"}>Create Elections</Link></li>
                    <li><Link to={"/elections"}>Select Election</Link></li>
                </ul>
            </form>
            </nav>
          </div>
      </>
   );
};
