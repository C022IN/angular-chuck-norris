// src/app/state/joke.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { addJoke } from './joke.actions';

export interface JokeState {
  jokes: string[];
}

export const initialState: JokeState = {
  jokes: []
};

export const jokeReducer = createReducer(
  initialState,
  on(addJoke, (state, { joke }) => ({
    ...state,
    jokes: [...state.jokes, joke]
  }))
);
