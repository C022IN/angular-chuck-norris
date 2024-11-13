import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule

@Component({
  selector: 'app-not-found',  
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  stonePosition = { x: 0, y: 0 };
  monsterPosition = 80;
  isFired = false;
  score = 0;
  attempts = 3;
  resultMessage = '';
  isHit = false;
  isMiss = false;

  // Method to handle launching the stone
  launchStone() {
    if (!this.isFired && this.attempts > 0) {
      this.isFired = true;
      let x = 10;
      let y = 0;

      const interval = setInterval(() => {
        x += 3;
        y = 0.05 * Math.pow(x - 10, 2);

        this.stonePosition = { x, y };

        // Check for hit
        if (x >= this.monsterPosition - 5 && x <= this.monsterPosition + 5 && y > 30) {
          clearInterval(interval);
          this.isFired = false;
          this.score++;
          this.resultMessage = '🎉 You hit the monster! 🎉';
          this.resetPositions();
          this.isHit = true;
          this.isMiss = false;
          setTimeout(() => this.isHit = false, 2000);
        }

        // Check if stone missed
        if (x > 100 || y > 40) {
          clearInterval(interval);
          this.isFired = false;
          this.attempts--;
          this.resultMessage = this.attempts > 0 ? `You threw ${Math.round(x)}m. Try again!` : `Game over! The monster was ${this.monsterPosition}m away.`;
          this.isMiss = true;
          this.isHit = false;
          setTimeout(() => this.isMiss = false, 2000);
          this.resetPositions();
        }
      }, 50);
    }
  }

  // Method to reset positions after each throw
  resetPositions() {
    this.stonePosition = { x: 0, y: 0 };
  }

  // Move the monster back and forth
  ngOnInit() {
    setInterval(() => {
      this.monsterPosition = this.monsterPosition < 80 ? this.monsterPosition + 10 : 20;
    }, 1000);
  }
}
