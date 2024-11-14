import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { MyJokeComponent } from '../../app/jokes/components/my-joke/my-joke.component';
import { RandomJokeComponent } from '../../app/jokes/components/random-joke/random-joke.component';
import { selectAllJokes } from '../../app/jokes/state/joke.selectors';


@Component({
  selector: 'app-jokes-page',
  standalone: true,
  imports: [
    CommonModule, 
    RandomJokeComponent, 
    MyJokeComponent
  ],

  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesPageComponent {
  // Select the jokes from the store to display in favorites
  jokes$ = inject(Store).select(selectAllJokes);
}
