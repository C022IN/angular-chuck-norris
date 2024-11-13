import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChucksAppBarComponent } from './chucks-app-bar.component';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { of } from 'rxjs';

class MockAuthService {
  user = of({ email: 'test@example.com' });
  logout = jasmine.createSpy('logout');
}

describe('ChucksAppBarComponent', () => {
  let component: ChucksAppBarComponent;
  let fixture: ComponentFixture<ChucksAppBarComponent>;
  let authService: MockAuthService;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule],
      declarations: [ChucksAppBarComponent],
      providers: [
        { provide: AuthService, useClass: MockAuthService },
        { provide: Router, useValue: spy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ChucksAppBarComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService) as unknown as MockAuthService;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to the correct route when navigateTo is called', () => {
    const route = '/colors';
    component.navigateTo(route);
    expect(routerSpy.navigate).toHaveBeenCalledWith([route]);
  });

  it('should toggle the user menu visibility when toggleUserMenu is called', () => {
    component.showUserMenu = false;
    component.toggleUserMenu();
    expect(component.showUserMenu).toBeTrue();

    component.toggleUserMenu();
    expect(component.showUserMenu).toBeFalse();
  });

  it('should call AuthService logout and navigate to login on logout', () => {
    component.logout();
    expect(authService.logout).toHaveBeenCalled();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
  });
});
