import { createSelector } from "reselect";

export const languageSelector = createSelector(
    state => state.language,
    language => language
)