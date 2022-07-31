import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, tap } from "rxjs/operators";
import { AuthActions } from "./action-types";

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private router: Router
    ) { }

    login$ = createEffect(() =>
        this.actions$
            .pipe(
                // Will emit only actions of type login
                ofType(AuthActions.login),
                tap(action => localStorage.setItem('user', JSON.stringify(action.user))),
            ), { dispatch: false }
    );

    logout$ = createEffect(() =>
        this.actions$
            .pipe(
                ofType(AuthActions.logout),
                tap(_ => {
                    localStorage.removeItem('user'),
                        this.router.navigateByUrl('/login')
                })
            ), { dispatch: false })
}
