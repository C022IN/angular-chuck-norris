import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChucksDialogComponent } from './chucks-dialog.component';
import { By } from '@angular/platform-browser';

describe('ChucksDialogComponent', () => {
  let component: ChucksDialogComponent;
  let fixture: ComponentFixture<ChucksDialogComponent>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<ChucksDialogComponent>>;

  beforeEach(async () => {
    // Create a spy for MatDialogRef
    dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      imports: [ChucksDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefSpy },
        { provide: MAT_DIALOG_DATA, useValue: { title: 'Test Dialog Title' } }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChucksDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title from input data', () => {
    const titleElement = fixture.debugElement.query(By.css('mat-dialog-title'));
    expect(titleElement.nativeElement.textContent).toContain('Test Dialog Title');
  });

  it('should emit close event and close the dialog on close button click', () => {
    const closeButton = fixture.debugElement.query(By.css('button[mat-icon-button]'));
    closeButton.triggerEventHandler('click', null);
    expect(dialogRefSpy.close).toHaveBeenCalled();
  });

  it('should close the dialog with a specific result when OK button is clicked', () => {
    const okButton = fixture.debugElement.query(By.css('button[mat-dialog-close]'));
    okButton.triggerEventHandler('click', null);
    expect(dialogRefSpy.close).toHaveBeenCalledWith(true);
  });

  it('should close the dialog with null when Cancel button is clicked', () => {
    const cancelButton = fixture.debugElement.query(By.css('button[mat-dialog-close]'));
    cancelButton.triggerEventHandler('click', null);
    expect(dialogRefSpy.close).toHaveBeenCalledWith(null);
  });
});
