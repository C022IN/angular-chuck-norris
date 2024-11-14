import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RandomJokeComponent } from "../../app/jokes/components/random-joke/random-joke.component";
import { FavoritesComponent } from "../favorites/favorites.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,  
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    RandomJokeComponent,
    FavoritesComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  showFavorites = false;

  toggleFavorites() {
    this.showFavorites = !this.showFavorites;
  }
}
