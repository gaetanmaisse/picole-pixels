import {DailyConsumption} from './DailyConsumption';
import {MonthlyConsumption} from './MonthlyConsumption';

export class DrinkRepository {
  private yearlyConsumption = [
    {
      nbOfDayInMonth: 31,
      monthOfYear: 1,
      initial: 'J',
      dailyConsumptions: this.getDailyConsumptions(31),
    },
    {
      nbOfDayInMonth: 28,
      monthOfYear: 2,
      initial: 'F',
      dailyConsumptions: this.getDailyConsumptions(28),
    },
    {
      nbOfDayInMonth: 31,
      monthOfYear: 3,
      initial: 'M',
      dailyConsumptions: this.getDailyConsumptions(31),
    },
    {
      nbOfDayInMonth: 30,
      monthOfYear: 4,
      initial: 'A',
      dailyConsumptions: this.getDailyConsumptions(30),
    },
    {
      nbOfDayInMonth: 31,
      monthOfYear: 5,
      initial: 'M',
      dailyConsumptions: this.getDailyConsumptions(31),
    },
    {
      nbOfDayInMonth: 30,
      monthOfYear: 6,
      initial: 'J',
      dailyConsumptions: this.getDailyConsumptions(30),
    },
    {
      nbOfDayInMonth: 31,
      monthOfYear: 7,
      initial: 'J',
      dailyConsumptions: this.getDailyConsumptions(31),
    },
    {
      nbOfDayInMonth: 31,
      monthOfYear: 8,
      initial: 'A',
      dailyConsumptions: this.getDailyConsumptions(31),
    },
    {
      nbOfDayInMonth: 30,
      monthOfYear: 9,
      initial: 'S',
      dailyConsumptions: this.getDailyConsumptions(30),
    },
    {
      nbOfDayInMonth: 31,
      monthOfYear: 10,
      initial: 'O',
      dailyConsumptions: this.getDailyConsumptions(31),
    },
    {
      nbOfDayInMonth: 30,
      monthOfYear: 11,
      initial: 'N',
      dailyConsumptions: this.getDailyConsumptions(30),
    },
    {
      nbOfDayInMonth: 31,
      monthOfYear: 12,
      initial: 'D',
      dailyConsumptions: this.getDailyConsumptions(31),
    }
  ];

  getAll(): MonthlyConsumption[] {
    return this.yearlyConsumption;
  }

  private getDailyConsumptions(size: number): DailyConsumption[] {
    const fakeData: DailyConsumption[] = [];
    for (let i = 0; i < size; i++) {
      fakeData.push({
        dayOfMonth: Math.round(i / 12),
        dayOfYear: i,
        numberOfDrinks: Math.round(Math.random() * 5),
      });
    }
    return fakeData;
  }
}


