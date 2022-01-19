import {Injectable} from '@angular/core';
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
const API_URL = 'http://localhost:8080/products'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
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

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(API_URL);
  }

  saveProduct(product: Product): Observable<Product> {
    // let found = false
    // for (let i = 0; i < this.products.length; i++) {
    //   if (this.products[i].id === product.id) {
    //     this.products[i] = product
    //     found = true
    //   }
    // }
    // if (!found) {
    //   this.products.push(product);
    // }
    console.log(product)
    return this.httpClient.post<Product>(API_URL,product);

  }
  updateProduct(id: string, product: Product): Observable<Product> {
    // let found = false
    // for (let i = 0; i < this.products.length; i++) {
    //   if (this.products[i].id === product.id) {
    //     this.products[i] = product
    //     found = true
    //   }
    // }
    // if (!found) {
    //   this.products.push(product);
    // }
    return this.httpClient.put<Product>(API_URL+`/${id}`,product);


  }

  deleteProduct(id: any):Observable<any> {
    // console.log(id)
    // let productList: Product[] = []
    // for (let i = 0; i < this.products.length; i++) {
    //   if (this.products[i].id != id) {
    //     productList.push(this.products[i])
    //   }
    // }
    // this.products = productList
    console.log(id)

   return this.httpClient.delete(API_URL+`/${id}`)
  }

  findById(id: any):  Observable<Product> {
    // return this.products.find(item => item.id == id)
    return this.httpClient.get<Product>(API_URL+`/${id}`);

  }

}
