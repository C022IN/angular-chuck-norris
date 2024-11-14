import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-chucks-dialog',
  templateUrl: './chucks-dialog.component.html',
  styleUrls: ['./chucks-dialog.component.scss'],
  standalone: true,
  imports: [
    MatDialogModule,       // Provides all mat-dialog elements (title, content, actions)
    MatButtonModule,       // For buttons within the dialog
    MatIconModule          // For icons (close icon)
  ]
})
export class ChucksDialogComponent {
  @Input() title: string = '';
  @Output() close = new EventEmitter<void>();

  constructor(public dialogRef: MatDialogRef<ChucksDialogComponent>) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
