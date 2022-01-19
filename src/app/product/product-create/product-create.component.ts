import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  categoryList: Category[] = []


  productForm: FormGroup = new FormGroup({

    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
  });

  constructor(private productService: ProductService, private router: Router, private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(result => {
      this.categoryList = result;
      console.log(result)
    })

  }

  submit() {
    const product = this.productForm.value;
    let newProduct = {
      name: product.name,
      price: product.price,
      description: product.description,
      category: {
        id: product.category
      }
    }

    this.productService.saveProduct(newProduct).subscribe(result => {
      console.log(result)
      this.router.navigate(["product/list"])
    }, error => {
      console.log(error)
    });

  }

}
