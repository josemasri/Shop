import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  number = 0;

  constructor(
    public cartService: CartService
  ) { }

  async ngOnInit() {
    this.number = await this.cartService.getNumber();
    this.cartService.update.subscribe(num => {
      this.number = num;
    });
  }

}
