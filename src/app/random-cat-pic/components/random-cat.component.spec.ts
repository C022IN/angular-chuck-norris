import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomCatComponent } from './random-cat.component';

describe('RandomCatComponent', () => {
  let component: RandomCatComponent;
  let fixture: ComponentFixture<RandomCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomCatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
