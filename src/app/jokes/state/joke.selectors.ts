
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { JokeState } from './joke.reducer';

export const selectJokeState = createFeatureSelector<JokeState>('jokes');

export const selectAllJokes = createSelector(
  selectJokeState,
  (state: JokeState) => state.jokes
);
