import { Component, OnInit } from '@angular/core';
import { Partnership } from 'src/app/models/community/partnership';
import { CommunityDataService } from 'src/app/services/community-data.service';

@Component({
  selector: 'app-community-partnerships',
  templateUrl: './community-partnerships.component.html',
  styleUrls: ['./community-partnerships.component.css']
})
export class CommunityPartnershipsComponent implements OnInit {

  protected partnerships: Partnership[] = [];

  constructor(private communityDataService: CommunityDataService) { }

  public async ngOnInit(): Promise<void> {
    this.partnerships = await this.communityDataService.getAllPartnerships() || [];
  }

}
