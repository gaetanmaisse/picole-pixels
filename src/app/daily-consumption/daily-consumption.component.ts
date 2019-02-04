import {Component, Input, OnInit} from '@angular/core';
import {DailyConsumption} from '../DailyConsumption';

@Component({
  selector: 'app-daily-consumption',
  templateUrl: './daily-consumption.component.html',
  styleUrls: ['./daily-consumption.component.scss']
})
export class DailyConsumptionComponent implements OnInit {

  @Input()
  public dailyConsumption: DailyConsumption;

  constructor() {
  }

  ngOnInit() {
  }

  getBackgroundColor(): string {
    switch (this.dailyConsumption.numberOfDrinks) {
      case 0:
        return '#eeeeee';
      case 1:
        return '#FFB800';
      case 2:
        return '#FF6500';
      case 3:
        return '#D90000';
      case 4:
        return '#400925';
      default:
        return '#111111';
    }
  }

}
