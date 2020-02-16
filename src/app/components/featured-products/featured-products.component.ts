import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from 'src/app/interfaces/Product';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss'],
})
export class FeaturedProductsComponent implements OnInit {

  @ViewChild(IonInfiniteScroll, null) infiniteScroll: IonInfiniteScroll;


  page = 1;
  products: Product[];


  constructor(
    private productService: ProductService
  ) { }


  ngOnInit() {
    this.products = this.productService.getProducts(this.page);
  }

  loadData(e) {
    setTimeout(() => {
      this.page++;
      const newProducts = this.productService.getProducts(this.page);
      if (newProducts.length > 0) {
        this.products.push(...newProducts);
        e.target.complete();
      } else {
        this.infiniteScroll.disabled = true;
      }
    }, 3000);
  }

  getProducts() {
    this.products = this.productService.getProducts(this.page);
  }

}
