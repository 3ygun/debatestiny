import * as Immutable from 'seamless-immutable';

import { ActionType, AppStateType } from '../../constants/types';

import {
    TRANSCRIPT_FINAL_ADD,
    TRANSCRIPT_INTERIM_SET,
} from './constants';

const istate: AppStateType = {
    conversation: {
        transcript: [],
    },
    loading: false,
    transcript: '',
};

export const initialState = Immutable.from(istate); // Make Immutable?

const appReducer = (state = initialState, action: ActionType<string>): Immutable.ImmutableObject<AppStateType> => {
    switch (action.type) {

        case TRANSCRIPT_FINAL_ADD:
            const mutState = state.asMutable({ deep: true });
            if (action.transcript) {
                mutState.conversation.transcript.push(action.transcript);
            }
            return Immutable.from(mutState);

        case TRANSCRIPT_INTERIM_SET:
            return state
                .set('transcript', action.transcript);

        default:
            return state;
    }
};

export default appReducer;
