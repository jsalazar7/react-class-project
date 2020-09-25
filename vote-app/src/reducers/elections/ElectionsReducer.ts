
import { Reducer, combineReducers, AnyAction } from 'redux';

import { Election } from '../../models/elections/Election';
import { ElectionsState } from '../../models/elections/ElectionsState';

import {
    SelectElectionAction, isSelectElectionAction, isCancelBallotAction
} from '../../actions/elections/ElectionsActions';


export const selectElectionReducer: Reducer<number, SelectElectionAction> = (electionId = 0, action) => {

    if (isSelectElectionAction(action)) {
      return action.payload.electionId;
    }

    if (isCancelBallotAction(action)) {
      return 0;
    }

    return electionId;
  }