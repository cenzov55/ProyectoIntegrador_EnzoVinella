import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  @Input() public porcentaje:string = "";
  @Input() public imagen:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
