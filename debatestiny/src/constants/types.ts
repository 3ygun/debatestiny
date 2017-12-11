import { Dispatch as ReduxDispatch } from 'redux';

interface AppState {
    conversation: {
        transcript: string[];
    };
    loading: boolean;
    transcript: string;
}

export type AppStateType = AppState;

interface RootState {
    app: AppState;
}

export type RootStateType = RootState;

interface Action<T> {
    type: string;
    transcript?: T;
}

export type ActionType<T> = Action<T>;

export type Dispatch = ReduxDispatch<RootState>;
