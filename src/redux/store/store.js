import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import recipesReducer from '../reducers/recipesReducer';
import themeReducer from '../reducers/themeReducer';
import thunk from 'redux-thunk';

const composeEnhancers =
    (typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

// The first key is the name that shows up in the Redux devtools
const reducers = combineReducers({
    recipes: recipesReducer,
    theme: themeReducer,
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
