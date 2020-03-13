import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // products = products;
  urlServicios = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getProductByID(id: string) {
    return this.http.get(`${this.urlServicios}/product/${id}`);
  }

  getProducts(pageNumber: number) {
    // return this.products.filter(product => (product.id <= (pageNumber * 4)) && (product.id > (pageNumber - 1) * 4));
    return this.http.get(`${this.urlServicios}/product`);
  }

  getCategories() {
    return this.http.get(`${this.urlServicios}/product/category`);
  }

  getProductsByCategory(category: string) {
    return this.http.get(`${this.urlServicios}/product/category/${category}`);
  }

}
