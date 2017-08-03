import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import ApplicationComponent from './component/application/application.component';
import CarouselComponent from './component/carousel/carousel.component';
import FooterComponent from './component/footer/footer.component';
import NavbarComponent from './component/navbar/navbar.component';
import ProductItemComponent from './component/productitem/productitem.component';
import SearchComponent from './component/search/search.component';
import StarsComponent from './component/stars/stars.component';
import { ProductServices } from './services/product.service';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    ApplicationComponent,
    CarouselComponent,
    FooterComponent,
    NavbarComponent,
    ProductItemComponent,
    SearchComponent,
    StarsComponent
  ],
  providers: [ProductServices],
  bootstrap: [ApplicationComponent]
})
export class AppModule {}
