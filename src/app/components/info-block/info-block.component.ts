import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.css']
})
export class InfoBlockComponent implements OnInit {

  @Input() public title!: string;
  @Input() public subtitle!: string;
  @Input() public text!: string;

  constructor() { }

  public ngOnInit(): void {
  }

}
