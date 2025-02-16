import { routerReducer } from '@ngrx/router-store';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {routerReducer} from '@ngrx/router-store';
import { environment } from '../../environments/environment';

export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer
}

export const logger = (reducer: ActionReducer<any>): ActionReducer<any> => {
    return (state, action) => {
        console.log('state before', state);
        console.log('action: ', action);

        return reducer(state, action);
    }
}

export const metaReducers: MetaReducer<AppState[]>[] =
    !environment.production ? [logger] : [];
