// default imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { voterToolStore } from './stores/voterToolStore';
import { VoterToolContainer } from './containers/VoterToolContainer';

import './index.css';

ReactDOM.render(
    <Provider store={voterToolStore}>
        <VoterToolContainer />
    </Provider>,
    document.querySelector('#root'),
);
