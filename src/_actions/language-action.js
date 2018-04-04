export const FRENCH='language:French';
export const GERMAN='language:German';
export const ENGLISH='language:English';

export function changeToFrench(){
    return {
        type:FRENCH,
        payload: {
            language: 'fr'
        }
    }
}

export function changeToGerman(){
    return {
        type:GERMAN,
        payload: {
            language: 'de'
        }
    }
}

export function changeToEnglish(){
    return {
        type:ENGLISH,
        payload: {
            language: 'en'
        }
    }
}