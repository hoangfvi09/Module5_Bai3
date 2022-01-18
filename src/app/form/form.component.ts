import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Product} from '../product';
import {ProductComponent} from "../product/product.component";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 formDemo = new FormGroup({
   id: new FormControl(),
   name: new FormControl(),
   price: new FormControl()

 })
  constructor() { }

  ngOnInit(): void {
  }
  create (){
   console.log(this.formDemo.value)


  }

}
