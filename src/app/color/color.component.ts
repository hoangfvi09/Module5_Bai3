import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  color = "green"
  greenIndex =0
  redIndex =0
  blueIndex =0
  colorr = 'rgb('+this.redIndex + ',' + this.greenIndex + ',' + this.blueIndex + ')'

  constructor() {
  }

  ngOnInit(): void {
  }

  colorRed() {
    this.color = "red"
  }

  colorGreen(){
    this.color = "green"
  }

  colorOrange(){
    this.color = "orange"
  }

  changeColor(){
    this.colorr = 'rgb('+this.redIndex + ',' + this.greenIndex + ',' + this.blueIndex + ')'
  }

}
