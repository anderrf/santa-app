import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Class } from 'src/app/models/class/class';
import { Message } from 'src/app/models/class/message';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ClassDataService } from 'src/app/services/class-data.service';

@Component({
  selector: 'app-class-private-notes',
  templateUrl: './class-private-notes.component.html',
  styleUrls: ['./class-private-notes.component.css']
})
export class ClassPrivateNotesComponent implements OnInit {

  protected notes: Message[] = [];
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
      this.notes = await this.classDataService.getPrivateNotesByClassId(this.class?.id || '');
      this.userId = (await this.authenticationService.getAuthenticatedUser()).id;
    })
  }

}
