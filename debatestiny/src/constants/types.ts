import { Dispatch as ReduxDispatch, Action } from 'redux';
import { ImmutableObject } from 'seamless-immutable';

interface AppState {
    conversation: {
        transcript: string[];
    };
    loading: boolean;
    transcript: string;
}

export type AppStateType = AppState;

interface RootState {
    app: ImmutableObject<AppState>;
}

export type RootStateType = RootState;

export type ActionType<T> = {
    type: string;
    transcript?: T;
};

export type Dispatch = ReduxDispatch<Action>;
