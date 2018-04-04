import { createStore, combineReducers } from 'redux';
import languageReducer from './_reducers/language-reducer';

const rootReducer = combineReducers ({
    language: languageReducer
})

const store = createStore(
    rootReducer,
    {
        language: 'en'
    },
    window.devToolsExtension && window.devToolsExtension()
);

export default store;