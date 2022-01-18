import {Injectable} from '@angular/core';
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  products: Product[] = [{
    id: 1,
    name: 'IPhone 12',
    price: 2400000,
    description: 'New'
  }, {
    id: 2,
    name: 'IPhone 11',
    price: 1560000,
    description: 'Like new'
  }, {
    id: 3,
    name: 'IPhone X',
    price: 968000,
    description: '97%'
  }, {
    id: 4,
    name: 'IPhone 8',
    price: 7540000,
    description: '98%'
  }, {
    id: 5,
    name: 'IPhone 11 Pro',
    price: 1895000,
    description: 'Like new'

  }];

  getAll() {
    return this.products;
  }

  saveProduct(product: Product) {
    let found = false
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === product.id) {
        this.products[i] = product
        found = true
      }
    }
    if (!found) {
      this.products.push(product);
    }

  }

  deleteProduct(id: any) {
    console.log(id)
    let productList: Product[] = []
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id != id) {
        productList.push(this.products[i])
      }
    }
    this.products = productList
  }

  findById(id: any) {
    return this.products.find(item => item.id == id)

  }

}
