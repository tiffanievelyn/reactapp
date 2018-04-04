import { FRENCH, GERMAN, ENGLISH } from '../_actions/language-action';

export default function languageReducer(state='', {type, payload}){
    switch(type){
        case FRENCH:
            return payload.language;
        case GERMAN:
            return payload.language;
        case ENGLISH:
            return payload.language;
        default:
            return state;
    }
}