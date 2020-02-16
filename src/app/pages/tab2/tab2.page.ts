import { Component, OnInit, ViewChild, Output, EventEmitter, Renderer2 } from '@angular/core';
import { ProductService } from '../../services/product.service';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  @Output() darkEvent: EventEmitter<boolean> = new EventEmitter();

  categories: string[];

  dark = false;

  constructor(
    private productService: ProductService,
    private renderer: Renderer2
  ) {

  }
  ngOnInit() {
    this.categories = this.productService.getCategories();
  }

  darkMode() {
    if (this.dark) {
      this.renderer.removeClass(document.body, 'dark');
    } else {
      this.renderer.addClass(document.body, 'dark');
    }
    this.dark = !this.dark;
  }



}
