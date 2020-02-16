import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from 'src/app/interfaces/Product';


@Component({
  selector: 'app-product-by-category',
  templateUrl: './product-by-category.page.html',
  styleUrls: ['./product-by-category.page.scss'],
})
export class ProductByCategoryPage implements OnInit {

  private sub;
  public category: string;
  public products: Product[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
    ) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.category = params['category'];
      this.products = this.productService.getProductsByCategory(this.category);
    });
  }

}
