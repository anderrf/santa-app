import { Component, Input, OnInit } from '@angular/core';
import { Schedule } from 'src/app/models/class/schedule';

@Component({
  selector: 'app-week-schedules',
  templateUrl: './week-schedules.component.html',
  styleUrls: ['./week-schedules.component.css']
})
export class WeekSchedulesComponent implements OnInit {

  @Input() public schedules!: Schedule[];
  protected weekDays: string[] = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado"
  ]

  constructor() { }

  public ngOnInit(): void {
  }

  public countByWeekDay(weekDay: number): number{
    return this.schedules?.filter(schedule => schedule.dayOfTheWeek === weekDay)?.length ?? 0;
  }

  public filterByWeekDay(weekDay: number): Schedule[]{
    return this.schedules?.filter(schedule => schedule.dayOfTheWeek === weekDay) ?? [];
  }
}
