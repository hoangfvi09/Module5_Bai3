import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  txt = ""
  constructor() { }

  ngOnInit(): void {
  }
  result = 0;

  cal() {
    // @ts-ignore
    this.result= eval(this.txt)

  }

}
