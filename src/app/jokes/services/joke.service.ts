import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ChuckNorrisJoke } from '../models/joke.model';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  private readonly apiUrl = 'https://api.chucknorris.io/jokes/random';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  getRandomJoke(): Observable<ChuckNorrisJoke> {
    return this.http.get<ChuckNorrisJoke>(this.apiUrl).pipe(
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('Error fetching joke:', error);
    this.snackBar.open('Error fetching joke', 'Close', { duration: 3000 });
    return throwError(() => error);
  }
}
