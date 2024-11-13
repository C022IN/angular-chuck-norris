import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyJokeComponent } from './my-joke.component';

describe('MyJokeComponent', () => {
  let component: MyJokeComponent;
  let fixture: ComponentFixture<MyJokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyJokeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
