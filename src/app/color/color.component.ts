import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  greenIndex =0
  redIndex =0
  blueIndex =0

  constructor() {
  }

  ngOnInit(): void {
  }

}
