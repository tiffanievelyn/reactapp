export const SHOW=true;
export const HIDE=false;

export function showSurvey(){
    return {
        type:SHOW,
        payload: {
            visibility: true
        }
    }
}

export function hideSurvey(){
    return {
        type:HIDE,
        payload: {
            visibility: false
        }
    }
}