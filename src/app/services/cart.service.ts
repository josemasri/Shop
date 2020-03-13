import { Injectable, OnInit } from '@angular/core';
import { Product } from '../interfaces/Product';
import { Storage } from '@ionic/storage';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {

  products: Product[];
  number = 0;
  update: Subject<number> = new Subject();


  constructor(private storage: Storage) { }

  async ngOnInit() {
    this.products = await this.storage.get('cart') || [];
    this.number = this.products.length;
  }

  async addProduct(product: Product) {
    this.products.unshift(product);
    this.setStorage();
    this.number = this.products.length;
    this.update.next(this.number);
  }

  removeProduct(id: number) {
    this.products = this.products.filter(product => product._id !== id);
    this.number = this.products.length;
    this.update.next(this.number);
    this.setStorage();
  }

  setStorage() {
    this.storage.set('cart', this.products);
  }

  async getProducts() {
    this.products = await this.storage.get('cart') || [];
    return this.products;
  }

  async getNumber() {
    this.products = await this.storage.get('cart') || [];
    return this.products.length;
  }

}
