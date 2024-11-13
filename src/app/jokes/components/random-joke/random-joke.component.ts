import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Import HttpClient for API calls
import { MatSnackBar } from '@angular/material/snack-bar'; // For snack bar notifications
import { MatCardModule } from '@angular/material/card'; // Import mat-card module
import { MatButtonModule } from '@angular/material/button'; // Import mat-button module
import { MatIconModule } from '@angular/material/icon'; // Import mat-icon module
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; // Import mat-spinner module
import { CommonModule } from '@angular/common'; // Import CommonModule for ngStyle

@Component({
  selector: 'app-random-joke',
  standalone: true,
  imports: [
    CommonModule,  // Import CommonModule for ngStyle and other directives
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
  joke: string | undefined = undefined; // Initialize as undefined
  isLoading: boolean = true;
  addedToFavorites: boolean = false;
  backgroundColor: string = '#fffacd'; // Initial background color

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.fetchJoke(); // Fetch the joke when the component initializes
  }

  // Fetch joke from the API
  fetchJoke(): void {
    this.isLoading = true;

    // Call the Chuck Norris joke API (example URL, replace it with the actual one)
    this.http.get<any>('https://api.chucknorris.io/jokes/random')
    .subscribe({
      next: (response) => {
        this.joke = response.value; // Set the joke data from the API response
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        this.snackBar.open('Failed to load joke. Try again later.', 'Close', { duration: 3000 });
      }
    });
  }

  // Fetch a new joke and update background color
  onNewJokeButton(): void {
    this.fetchJoke(); // Refetch a new joke when the button is clicked
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
