import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/Product';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit, OnDestroy {

  private sub;
  public id: number;
  public product: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
      this.product = this.productService.getProductByID(this.id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  async addToCart() {
    await this.cartService.addProduct(this.product);
    this.navCtrl.navigateForward('/');
  }
}
