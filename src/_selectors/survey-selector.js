import { createSelector } from "reselect";

export const surveyVisibilitySelector = createSelector(
    state => state.survey.visibility,
    visibility => visibility
)