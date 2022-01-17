import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productList: Product [] = [
    {
    id: '1',
    name: 'ip 1',
    price: '1000'
  },{
    id: '2',
    name: 'ip 2',
    price: '1000'
  },{
    id: '3',
    name: 'ip 3',
    price: '1000'
  },{
    id: '4',
    name: 'ip 4',
    price: '1000'
  },
  ]

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
    this.productList.push(this.formDemo.value)
  }

}
