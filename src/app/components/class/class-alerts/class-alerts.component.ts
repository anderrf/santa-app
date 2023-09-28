import { ClassDataService } from './../../../services/class-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Class } from 'src/app/models/class/class';
import { Message } from 'src/app/models/class/message';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-class-alerts',
  templateUrl: './class-alerts.component.html',
  styleUrls: ['./class-alerts.component.css']
})
export class ClassAlertsComponent implements OnInit {

  protected alerts: Message[] = [];
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
      this.alerts = await this.classDataService.getAlertsByClassId(this.class?.id || '');
      this.userId = (await this.authenticationService.getAuthenticatedUser()).id;
    })
  }

}
