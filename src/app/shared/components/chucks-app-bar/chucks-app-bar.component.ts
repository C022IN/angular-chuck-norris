import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

interface Page {
  title: string;
  route: string;
}

@Component({
  selector: 'app-chucks-app-bar',
  standalone: true,
  imports: [
    CommonModule, // Required for *ngFor
    MatToolbarModule, // Required for mat-toolbar
    MatButtonModule,  // Required for mat-button
    MatMenuModule,    // Required for mat-menu
    MatIconModule,    // Required for icons
  ],
  templateUrl: './chucks-app-bar.component.html',
  styleUrls: ['./chucks-app-bar.component.scss'],
  animations: [
    trigger('menuSlide', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('0.3s ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('0.2s ease-in', style({ transform: 'translateX(-100%)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class ChucksAppBarComponent implements OnInit {
  pages: Page[] = [
    { title: 'Home', route: '/' },
    { title: 'Colors', route: '/colors' },
    { title: 'Favorites', route: '/favorites' },
    { title: 'Cute Cats', route: '/cats' },
    { title: 'Custom Jokes', route: '/custom-joke' },
  ];
  user: any;
  showUserMenu = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.user = this.authService.user;
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  toggleUserMenu() {
    this.showUserMenu = !this.showUserMenu;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
