import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/community/event';
import { CommunityDataService } from 'src/app/services/community-data.service';

@Component({
  selector: 'app-community-events',
  templateUrl: './community-events.component.html',
  styleUrls: ['./community-events.component.css']
})
export class CommunityEventsComponent implements OnInit {

  protected events: Event[] = [];

  constructor(private communityDataService: CommunityDataService) { }

  public async ngOnInit(): Promise<void> {
    this.events = await this.communityDataService.getAllEvents() || [];
  }

}
