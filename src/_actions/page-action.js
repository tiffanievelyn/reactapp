export const SET_PAGE_LOCATION = 'page:setPageLocation';

export const PageLocation = {
    USER: 'user',
    DASHBOARD: 'dashboard',
    RESPONSES: 'responses',
    INSIGHTS: 'insights',
    SOURCES: 'sources',
    SETTINGS: 'settings',
    FEEDBACK: 'feedback',
    HELP: 'help'
}

export function SetPageLocation(page) {
    return { type:SET_PAGE_LOCATION, payload:page }
}