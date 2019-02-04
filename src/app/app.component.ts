import {Component} from '@angular/core';
import {DrinkRepository} from './DrinkRepository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'picole-pixels';
  public drinkConsumptions = new DrinkRepository().getAll();

  constructor() {
  }
}
