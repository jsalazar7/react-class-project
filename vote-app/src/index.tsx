// default imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';

import { voterToolStore } from './stores/voterToolStore';
import { VoterToolContainer } from './containers/voters/VoterToolContainer';
import { CreateElectionContainer } from './containers/elections/CreateElectionContainer';
import { DisplayElectionsContainer } from './containers/elections/DisplayElectionsContainer';

import './index.css';

ReactDOM.render(
    <Router>
        <div>
        <Provider store={voterToolStore}>
            <Route exact path="/voter" component={VoterToolContainer} />
            <Route exact path="/createElections" component={CreateElectionContainer} />
            <Route exact path="/elections" component={DisplayElectionsContainer} />
        </Provider>,
        </div>
    </Router>,
    document.querySelector('#root'),
);
