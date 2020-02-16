import { Injectable } from '@angular/core';
import { Product } from '../interfaces/Product';
import { products } from '../data/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = products;

  constructor() { }

  getProductByID(id: number) {
    return this.products.filter(product => id === product.id)[0];
  }

  getProducts(pageNumber: number): Product[] {
    return this.products.filter(product => (product.id <= (pageNumber * 4)) && (product.id > (pageNumber - 1) * 4));
  }

  getCategories(): string[] {
    const categories = [];
    this.products.forEach(product => {
      categories.push(product.category);
    });
    // Removing duplicates
    const uniqueSet = new Set(categories);
    return [...uniqueSet];
  }

  getProductsByCategory(category: string): Product[] {
    const categories = [];
    return this.products.filter(product => product.category === category);
  }
}
