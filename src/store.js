import { createStore, combineReducers } from 'redux';

import pageReducer from './_reducers/page-reducer';
import languageReducer from './_reducers/language-reducer';
import surveyReducer from './_reducers/survey-reducer';

const rootReducer = combineReducers ({
    page: pageReducer,
    language: languageReducer,
    survey: surveyReducer
})

const store = createStore(
    rootReducer,
    window.devToolsExtension && window.devToolsExtension()
);

export default store;