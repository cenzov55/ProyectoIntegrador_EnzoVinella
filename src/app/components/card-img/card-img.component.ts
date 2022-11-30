import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-card-img',
  templateUrl: './card-img.component.html',
  styleUrls: ['./card-img.component.css']
})
export class CardImgComponent implements OnInit {

 @Input() public title:string = "";
 @Input() public imagen:string = "";
 @Input() public texto:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
