import { createSelector } from "@ngrx/store";

export const isLoggedIn = createSelector(
    // Take only the auth store
    (state: any) => state.auth,
    (auth) => !!auth.user
);

export const isLoggedOut = createSelector(
    isLoggedIn,
    loggedIn => !loggedIn
);
