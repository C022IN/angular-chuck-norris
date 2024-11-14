import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingButtonComponent } from './loading-button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

describe('LoadingButtonComponent', () => {
  let component: LoadingButtonComponent;
  let fixture: ComponentFixture<LoadingButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingButtonComponent ],
      imports: [
        CommonModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        NoopAnimationsModule // Needed for testing animations
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct default color', () => {
    expect(component.color).toBe('primary');
  });

  it('should toggle loading state', () => {
    expect(component.loading).toBeFalse();
    component.loading = true;
    expect(component.loading).toBeTrue();
  });

  it('should apply correct styles when loading', () => {
    component.loading = true;
    fixture.detectChanges();
    expect(component.buttonStyle).toEqual(jasmine.objectContaining({
      paddingLeft: '8px',
      paddingRight: '8px'
    }));
  });
});
