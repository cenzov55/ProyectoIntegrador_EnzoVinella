import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  @Input() public title:string = "";
  @Input() public porcentaje:Number = 0;
  @Input() public imagen:string = "";
  


  constructor() { }

  ngOnInit(): void {
  }

}
