import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { CommonModule } from '@angular/common'; // Provides ngStyle and other common directives
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; // Module for mat-spinner
import { MatButtonModule } from '@angular/material/button'; // Import for mat-button

interface Style {
  paddingLeft?: string;
  paddingRight?: string;
  [key: string]: string | undefined;
}

@Component({
  selector: 'app-loading-button',
  standalone: true,
  imports: [
    CommonModule, // Import CommonModule to use ngStyle
    MatProgressSpinnerModule, // Import MatProgressSpinnerModule to recognize mat-spinner
    MatButtonModule 
  ],
  templateUrl: './loading-button.component.html',
  styleUrls: ['./loading-button.component.scss']
})


export class LoadingButtonComponent implements OnInit {
  @Input() loading: boolean = false;
  @Input() color: ThemePalette = 'primary'; // Default button color
  @Input() disabled: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  get buttonStyle(): Style {
    let styles: Style = {};
    if (this.loading) {
      styles['paddingLeft'] = '8px';
      styles['paddingRight'] = '8px';
    }
    return styles;
  }
}
