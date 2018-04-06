export const SHOW="survey-visibility:true";
export const HIDE="survey-visibility:false";

export const ADD_SURVEY="survey:add";

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

export function addSurvey(survey){
    console.log(survey);
    return {
        type:ADD_SURVEY,
        payload: {
            id: survey.surveyId,
            name: survey.name,
            creation: survey.creationDate
        }
    }
}