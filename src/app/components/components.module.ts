import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MainSlidesComponent } from './main-slides/main-slides.component';
import { PipesModule } from '../pipes/pipes.module';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { FeaturedProductComponent } from './featured-product/featured-product.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MainSlidesComponent,
    FeaturedProductsComponent,
    FeaturedProductComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    RouterModule
  ],
  exports: [
    MainSlidesComponent,
    FeaturedProductsComponent
  ]
})
export class ComponentsModule { }
