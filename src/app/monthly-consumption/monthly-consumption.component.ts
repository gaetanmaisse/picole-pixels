import {Component, Input, OnInit} from '@angular/core';
import {MonthlyConsumption} from '../MonthlyConsumption';

@Component({
  selector: 'app-monthly-consumption',
  templateUrl: './monthly-consumption.component.html',
  styleUrls: ['./monthly-consumption.component.scss']
})
export class MonthlyConsumptionComponent implements OnInit {

  @Input()
  public monthlyConsumption: MonthlyConsumption;

  constructor() {
  }

  ngOnInit() {
  }

}
