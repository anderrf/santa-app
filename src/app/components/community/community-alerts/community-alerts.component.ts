import { CommunityDataService } from './../../../services/community-data.service';
import { Component, OnInit } from '@angular/core';
import { Alert } from 'src/app/models/community/alert';

@Component({
  selector: 'app-community-alerts',
  templateUrl: './community-alerts.component.html',
  styleUrls: ['./community-alerts.component.css']
})
export class CommunityAlertsComponent implements OnInit {

  protected alerts: Alert[] = [];

  constructor(private communityDataService: CommunityDataService) { }

  public async ngOnInit(): Promise<void> {
    this.alerts = await this.communityDataService.getAllAlerts() || [];
  }

}
