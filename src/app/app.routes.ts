// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { CatsComponent } from '../pages/cats/cats.component';
import { ColorsComponent } from '../pages/colors/colors.component';
import { CustomJokeComponent } from '../pages/custom-joke/custom-joke.component';
import { FavoritesComponent } from '../pages/favorites/favorites.component';
import { LoginComponent } from '../pages/login/login.component';
import { PasswordResetComponent } from '../pages/password-reset/password-reset.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { RandomCatComponent } from './random-cat-pic/components/random-cat.component';
import { FavoritesListComponent } from './favorites/components/favorites-list/favorites-list.component';
import { ColorTableComponent } from './random-color/components/color-table/color-table.component';
import { RandomJokeComponent } from './jokes/components/random-joke/random-joke.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cats', component: CatsComponent },
  { path: 'colors', component: ColorsComponent },
  { path: 'custom-joke', component: CustomJokeComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'password-reset', component: PasswordResetComponent },
  { path: 'random-cat', component: RandomCatComponent },
  { path: 'favorites-list', component: FavoritesListComponent },
  { path: 'color-table', component: ColorTableComponent },
  { path: 'random-joke', component: RandomJokeComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' } // catches unknown routes
];
