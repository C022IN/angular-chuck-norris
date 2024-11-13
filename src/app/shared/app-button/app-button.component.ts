import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-app-button',
  standalone: true,
  imports: [],
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.scss']
})

export class AppButtonComponent {
  @Output() clickEvent = new EventEmitter();

  onClick() {
    this.clickEvent.emit();
  }
}
