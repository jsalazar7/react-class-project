import { createStore } from 'redux';

import { voterToolReducer } from '../reducers/voterToolReducers';

export const voterToolStore = createStore(voterToolReducer);
