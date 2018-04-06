import { createSelector } from "reselect";

export const pageSelector = createSelector(
    state => state.page,
    page => page
)