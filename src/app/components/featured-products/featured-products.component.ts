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
    this.productService.getProducts(this.page).subscribe((res: any) => {
      console.log(res.products);
      this.products = res.products;
    });
  }

  loadData(e) {
    setTimeout(() => {
      this.page++;
      this.productService.getProducts(this.page);
      this.infiniteScroll.disabled = true;
    }, 3000);
  }

  getProducts() {
    this.productService.getProducts(this.page).subscribe((res: any) => {
      this.products = res.products;
    });
  }

}
