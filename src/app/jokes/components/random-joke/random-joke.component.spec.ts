import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RandomJokeComponent } from './random-joke.component';
import { ChuckNorrisJoke } from '../../models/joke.model';

describe('RandomJokeComponent', () => {
  let component: RandomJokeComponent;
  let fixture: ComponentFixture<RandomJokeComponent>;
  let httpTestingController: HttpTestingController;

  const mockJoke: ChuckNorrisJoke = {
    icon_url: 'https://example.com/icon.png',
    id: '123',
    url: 'https://api.chucknorris.io/jokes/123',
    value: 'This is a Chuck Norris joke.'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomJokeComponent, HttpClientTestingModule, MatSnackBarModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RandomJokeComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch and display a random joke on initialization', waitForAsync(() => {
    component.ngOnInit();
    const req = httpTestingController.expectOne('https://api.chucknorris.io/jokes/random');
    expect(req.request.method).toEqual('GET');
    req.flush(mockJoke);

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.joke).toEqual(mockJoke);
      expect(component.isLoading).toBeFalse();
    });
  }));

  it('should show an error message if joke fetch fails', () => {
    spyOn(component['snackBar'], 'open');

    component.fetchJoke();
    const req = httpTestingController.expectOne('https://api.chucknorris.io/jokes/random');
    req.error(new ErrorEvent('Network error'));

    expect(component['snackBar'].open).toHaveBeenCalledWith('Failed to load joke. Try again later.', 'Close', { duration: 3000 });
    expect(component.isLoading).toBeFalse();
  });

  it('should toggle background color when fetching a new joke', () => {
    const initialColor = component.backgroundColor;
    component.onNewJokeButton();
    expect(component.backgroundColor).not.toEqual(initialColor);
  });

  it('should add joke to favorites', () => {
    component.joke = mockJoke;
    component.addedToFavorites = false;
    spyOn(component['snackBar'], 'open');

    component.addJokeToFavorites();

    expect(component.addedToFavorites).toBeTrue();
    expect(component['snackBar'].open).toHaveBeenCalledWith('Joke added to favorites!', 'Close', { duration: 2000 });
  });
});
