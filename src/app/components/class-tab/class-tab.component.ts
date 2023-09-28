import { ClassDataService } from './../../services/class-data.service';
import { Component, OnInit } from '@angular/core';
import { Class } from 'src/app/models/class/class';

@Component({
  selector: 'app-class-tab',
  templateUrl: './class-tab.component.html',
  styleUrls: ['./class-tab.component.css']
})
export class ClassTabComponent implements OnInit {

  protected classes: Class[] = [];

  constructor(private classDataService: ClassDataService) { }

  public async ngOnInit(): Promise<void> {
    this.classes = await this.classDataService.getAllClasses();
  }

}
