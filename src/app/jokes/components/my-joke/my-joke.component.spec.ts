import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyJokeComponent } from './my-joke.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { addJoke } from '../../state/joke.actions';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs'; // Import 'of' to create observable

describe('MyJokeComponent', () => {
  let component: MyJokeComponent;
  let fixture: ComponentFixture<MyJokeComponent>;
  let store: MockStore;
  let snackBar: MatSnackBar;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyJokeComponent, MatSnackBarModule, FormsModule],
      providers: [
        provideMockStore(),
        { provide: MatSnackBar, useValue: jasmine.createSpyObj('MatSnackBar', ['open']) }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyJokeComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    snackBar = TestBed.inject(MatSnackBar);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch addJoke action and show success message when adding a new joke', () => {
    component.joke = 'This is a test joke';
    
    spyOn(store, 'dispatch');
    component.addJokeToFavorites();
    
    expect(store.dispatch).toHaveBeenCalledWith(addJoke({ joke: 'This is a test joke' }));
    expect(snackBar.open).toHaveBeenCalledWith('Joke added to favorites!', 'Close', { duration: 2000 });
    expect(component.joke).toBe(''); // Verifies that the input field is cleared
  });

  it('should show an error message if the joke already exists', () => {
    spyOn(store, 'select').and.returnValue(of(['This is a test joke'])); // Mocked observable list of jokes in state

    component.joke = 'This is a test joke';
    component.addJokeToFavorites();

    expect(snackBar.open).toHaveBeenCalledWith('Joke already exists in favorites!', 'Close', { duration: 2000 });
  });
});
