import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Class } from 'src/app/models/class/class';
import { ProfessorSchedule } from 'src/app/models/class/professor-schedule';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ClassDataService } from 'src/app/services/class-data.service';

@Component({
  selector: 'app-class-professor-schedules',
  templateUrl: './class-professor-schedules.component.html',
  styleUrls: ['./class-professor-schedules.component.css']
})
export class ClassProfessorSchedulesComponent implements OnInit {

  protected professorSchedule!: ProfessorSchedule | null;
  protected class!: Class | null;
  protected userId: string = '';

  constructor(
    private classDataService: ClassDataService,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute
  ) {
  }

  public async ngOnInit(): Promise<void> {
    this.route.parent?.params.subscribe(async (params) => {
      this.class = await this.classDataService.getClassByClassId(params['classId'] || '');
      this.professorSchedule = await this.classDataService.getProfessorSchedulesByProfessorId(this.class?.professorId || '');
      this.userId = (await this.authenticationService.getAuthenticatedUser()).id;
    })
  }

}
