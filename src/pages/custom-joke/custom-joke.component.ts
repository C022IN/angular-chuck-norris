// src/pages/custom-joke/custom-joke.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MyJokeComponent } from '../../app/jokes/components/my-joke/my-joke.component';

@Component({
  selector: 'app-custom-joke',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MyJokeComponent // Import MyJokeComponent for joke submission
  ],
  templateUrl: './custom-joke.component.html',
  styleUrls: ['./custom-joke.component.scss']
})
export class CustomJokeComponent {}
