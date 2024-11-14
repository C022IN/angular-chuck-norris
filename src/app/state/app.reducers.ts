// src/app/state/app.reducers.ts
import { ActionReducerMap } from '@ngrx/store';
import { jokeReducer, JokeState } from '../jokes/state/joke.reducer'; // Import your specific reducer

// Define the application state interface
export interface AppState {
  jokes: JokeState; // Define the shape of the jokes state, or import its interface if defined
}

// Combine all feature reducers
export const reducers: ActionReducerMap<AppState> = {
  jokes: jokeReducer,
};
