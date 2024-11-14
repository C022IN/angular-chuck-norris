
import { createAction, props } from '@ngrx/store';

export const addJoke = createAction(
  '[Joke] Add Joke',
  props<{ joke: string }>()
);
export const jokeExistsError = createAction(
  '[Joke] Joke Exists Error'
);
