import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';

@Component({
  selector: 'app-root',
  imports: [PlayingCardComponent],
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-pokemon-app';
}
