import { ClassDataService } from './../../../services/class-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Class } from 'src/app/models/class/class';

@Component({
  selector: 'app-class-functions-list',
  templateUrl: './class-functions-list.component.html',
  styleUrls: ['./class-functions-list.component.css']
})
export class ClassFunctionsListComponent implements OnInit {

  protected class?: Class | null;

  constructor(
    private classDataService: ClassDataService,
    private route: ActivatedRoute
  ) { }

  public async ngOnInit(): Promise<void> {
    this.route.params.subscribe(async (params) => {
      this.class = await this.classDataService.getClassByClassId(params['classId'] || '');
    });
  }

}
