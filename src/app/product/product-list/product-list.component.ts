import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit() {
    // this.getAll();
    this.productService.getAll().subscribe(result => {
      this.products = result
      console.log(result)

    }, error => {
      console.log(error)
    });
  }

  getAll() {
    this.productService.getAll().subscribe(result => {
      this.products = result
      console.log(result)

    }, error => {
      console.log(error)
    });
  }

  delete(id:any){
    this.productService.deleteProduct(id).subscribe(result => {
      console.log(result)
      // this.router.navigate(["/product/list"])
      this.getAll()
    })


  }


}
