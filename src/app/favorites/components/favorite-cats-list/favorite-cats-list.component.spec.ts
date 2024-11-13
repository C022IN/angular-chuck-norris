import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteCatsListComponent } from './favorite-cats-list.component';

describe('FavoriteCatsListComponent', () => {
  let component: FavoriteCatsListComponent;
  let fixture: ComponentFixture<FavoriteCatsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteCatsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteCatsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
