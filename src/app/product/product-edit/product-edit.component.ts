import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    description: ''
  }

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      console.log(id)
      // @ts-ignore
      this.product = this.productService.findById(id);
      this.productForm.setValue(this.product)
      console.log(this.product)
    });

  }

  submit() {
    const product = this.productForm.value
    this.productService.saveProduct(product)
    this.router.navigate(["/product/list"])
  }

}
