import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product = {id: 0, price: 0, name: '', description: ''}
  categoryList: Category[] = []


  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router, private fb: FormBuilder, private categoryService: CategoryService) {
  }

  productForm: FormGroup = this.fb.group({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
  });

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      console.log(id)
      // @ts-ignore
      this.productService.findById(id).subscribe(result => {
        this.product = result;
        console.log(result)
        this.productForm.setValue(this.product)
        console.log(this.product)

      });

    });
    this.categoryService.getAll().subscribe(result => {
      this.categoryList = result
    })
    // this.product = {id: 0, price: 0, name: '', description: ''}
  }

  submit() {
    const product = this.productForm.value
    console.log(product)
    console.log(product.id)
    let newProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      category: product.category
    }
    this.productService.updateProduct(product.id, newProduct).subscribe(result => {
      console.log(result)
      this.router.navigate(["/product/list"])
    })

  }

}
