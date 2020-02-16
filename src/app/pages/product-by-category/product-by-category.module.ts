import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductByCategoryPageRoutingModule } from './product-by-category-routing.module';

import { ProductByCategoryPage } from './product-by-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ProductByCategoryPageRoutingModule
  ],
  declarations: [ProductByCategoryPage]
})
export class ProductByCategoryPageModule {}
