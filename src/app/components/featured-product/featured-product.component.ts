import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.scss'],
})
export class FeaturedProductComponent implements OnInit {

  @Input() image: string;
  @Input() title: string;
  @Input() price: number;

  constructor() { }

  ngOnInit() { }

}
