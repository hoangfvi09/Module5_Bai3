import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {Category} from "../model/category";
const API_URL = 'http://localhost:8080/categories'
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }


  getAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(API_URL);
  }






}
