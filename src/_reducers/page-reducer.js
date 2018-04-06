import { SET_PAGE_LOCATION, PageLocation } from '../_actions/page-action';

const initialState = {
    page:PageLocation.DASHBOARD
}

export default function pageReducer(state=initialState.page, {type, payload}){
    switch(type){
        case SET_PAGE_LOCATION:
            return payload;
        default:
            return state;
    }
}