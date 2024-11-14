// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideStore } from '@ngrx/store';
import { reducers } from './app/state/app.reducers'; // Your root reducers

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),          // Proper way to include HttpClient in bootstrapApplication
    provideAnimations(),           // Provide animations correctly
    provideStore(reducers)         // Set up NgRx Store with reducers
  ]
}).catch(err => console.error(err));
