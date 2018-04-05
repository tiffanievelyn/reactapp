import { createStore, combineReducers } from 'redux';
import languageReducer from './_reducers/language-reducer';
import surveyReducer from './_reducers/survey-reducer';

const rootReducer = combineReducers ({
    language: languageReducer,
    survey: surveyReducer
})

const store = createStore(
    rootReducer,
    window.devToolsExtension && window.devToolsExtension()
);

export default store;