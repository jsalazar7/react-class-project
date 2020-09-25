import {ToolHeader} from "./ToolHeader";
import React from "react";
import { Link } from "react-router-dom";

export function Home() {

    return (
      <>
          <ToolHeader headerText="Election Home Page" />
          <div>
            <nav>
                <ul>
                    <li><Link to={"/voter"}>Voter Registration</Link></li>
                    <li><Link to={"/createElections"}>Create Elections</Link></li>
                    <li><Link to={"/elections"}>Select Election</Link></li>
                </ul>
            </nav>
          </div>
      </>
   );
};
