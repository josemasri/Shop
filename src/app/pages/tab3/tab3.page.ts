import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  products: Product[] = [];
  loading = true;
  total = 0;

  constructor(
    public cartService: CartService
  ) { }

  async ionViewWillEnter() {
    this.products = await this.cartService.getProducts();
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = 0;
    this.products.forEach(product => {
      this.total += product.price;
    });
  }

  async remove(id: number) {
    await this.cartService.removeProduct(id);
    this.products = await this.cartService.getProducts();
    this.calculateTotal();
  }
}
