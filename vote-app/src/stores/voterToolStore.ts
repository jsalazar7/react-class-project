import { createStore } from 'redux';

import { voterToolReducer } from '../reducers/voters/voterToolReducers';

export const voterToolStore = createStore(voterToolReducer);
