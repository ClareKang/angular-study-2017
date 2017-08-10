import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './components/home.component';
import { ProductDetailComponent } from './components/product.component';
import { _404Component } from './components/_404.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Router, Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'product',
    component: ProductDetailComponent
  },
  {
    path: '**',
    component: _404Component
  },
];

@Component({
  selector: 'app',
	template : `
		<a [routerLink]="['/']">Home</a>
    <a [routerLink]="['/product']">Product Details</a>
    <input type="button" value="Product Details" (click)="navigateToProductDetail()" />
		<router-outlet></router-outlet>
	`
})
class AppComponent {
  constructor (private router : Router) {}
  navigateToProductDetail() {
    this.router.navigate(['/product']);
  }
}

@NgModule({
	imports : [
		BrowserModule,
		RouterModule.forRoot(routes)
	],
	declarations : [
		AppComponent,
		HomeComponent,
    ProductDetailComponent,
    _404Component
	],
	providers : [
		{
			provide : LocationStrategy,
			useClass : HashLocationStrategy
		}
	],
	bootstrap : [AppComponent]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);