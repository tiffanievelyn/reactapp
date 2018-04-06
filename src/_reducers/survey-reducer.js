import { SHOW, HIDE } from '../_actions/survey-action';
import { ADD_SURVEY } from '../_actions/survey-action';

const initialState = {
    visibility: false,
    surveylist: []
}

function visibilityReducer(state, {type, payload}){
    switch(type){
        case SHOW:
            return payload.visibility;
        case HIDE:
            return payload.visibility;
        default:
            return state;
    }
}

function listReducer(state=[], {type, payload}){
    switch(type){
        case ADD_SURVEY:
            return [
                ...state,
                {
                    id: payload.id,
                    name: payload.name,
                    creation: payload.creation
                }
            ]
        default:
            return state;
    }
}

export default function surveyReducer(state=initialState, {type, payload}){
    return {
        visibility:visibilityReducer(state.visibility, {type, payload}),
        surveyList:listReducer(state.surveyList, {type, payload})
    }
}