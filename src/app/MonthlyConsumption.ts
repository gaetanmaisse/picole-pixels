import {DailyConsumption} from './DailyConsumption';

export interface MonthlyConsumption {
  dailyConsumptions: DailyConsumption[];
  monthOfYear: number;
  nbOfDayInMonth: number;
  initial: string;
}
