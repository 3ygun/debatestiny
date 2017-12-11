import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';

import { RootStateType } from '../constants/types';
import { createReducer } from '../redux/index';

import { initialState as appInitialState } from '../redux/app';

export function configureStore(): Store<RootStateType> {

    const store = createStore<RootStateType>(
        createReducer(),
        {
            app: appInitialState,
        },
        applyMiddleware(thunk)
    );

    return store;
}
