import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Class } from 'src/app/models/class/class';
import { Schedule } from 'src/app/models/class/schedule';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ClassDataService } from 'src/app/services/class-data.service';

@Component({
  selector: 'app-class-schedules',
  templateUrl: './class-schedules.component.html',
  styleUrls: ['./class-schedules.component.css']
})
export class ClassSchedulesComponent implements OnInit {

  protected schedules: Schedule[] = [];
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
      this.schedules = await this.classDataService.getSchedulesByClassId(this.class?.id || '');
      this.userId = (await this.authenticationService.getAuthenticatedUser()).id;
    })
  }

}
