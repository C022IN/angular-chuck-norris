import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { ChuckNorrisJoke } from '../../models/joke.model';

@Component({
  selector: 'app-random-joke',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule, 
    MatButtonModule, 
    MatIconModule, 
    MatProgressSpinnerModule,
    HttpClientModule  
  ],
  templateUrl: './random-joke.component.html',
  styleUrls: ['./random-joke.component.scss']
})
export class RandomJokeComponent implements OnInit {
  joke: ChuckNorrisJoke | null = null; // Define the joke as null initially
  isLoading: boolean = true;
  addedToFavorites: boolean = false;
  backgroundColor: string = '#fffacd';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.fetchJoke();
  }

  // Fetch joke from the API
  fetchJoke(): void {
    this.isLoading = true;

    // Fetch joke from the Chuck Norris API
    this.http.get<ChuckNorrisJoke>('https://api.chucknorris.io/jokes/random')
    .subscribe({
      next: (response) => {
        this.joke = response; // Use response directly as it is of type ChuckNorrisJoke
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.snackBar.open('Failed to load joke. Try again later.', 'Close', { duration: 3000 });
      }
    });
  }

  // Fetch a new joke and update background color
  onNewJokeButton(): void {
    this.fetchJoke();
    this.setRandomBackgroundColor();
  }

  // Add joke to favorites
  addJokeToFavorites(): void {
    if (this.joke && !this.addedToFavorites) {
      // Logic to add joke to favorites (e.g., save it to a list or local storage)
      this.addedToFavorites = true;
      this.snackBar.open('Joke added to favorites!', 'Close', { duration: 2000 });
    }
  }

  // Set a random background color for each new joke
  setRandomBackgroundColor(): void {
    this.backgroundColor = this.backgroundColor === '#fffacd' ? '#e6e6fa' : '#fffacd';
  }
}
