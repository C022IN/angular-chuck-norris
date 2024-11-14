import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatSnackBar } from '@angular/material/snack-bar';
import { addJoke } from '../../state/joke.actions';
import { selectAllJokes } from '../../state/joke.selectors';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-my-joke',
  standalone: true,
  templateUrl: './my-joke.component.html',
  styleUrls: ['./my-joke.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
})
export class MyJokeComponent {
  joke: string = '';
  private store = inject(Store);
  jokes$ = this.store.select(selectAllJokes); // Direct injection of store

  constructor(private snackBar: MatSnackBar) {}

  addJokeToFavorites() {
    this.jokes$.subscribe((jokes) => {
      if (jokes.includes(this.joke)) {
        this.snackBar.open('Joke already exists in favorites!', 'Close', { duration: 2000 });
      } else {
        this.store.dispatch(addJoke({ joke: this.joke }));
        this.snackBar.open('Joke added to favorites!', 'Close', { duration: 2000 });
        this.joke = ''; // Clear the input field
      }
    });
  }
}
