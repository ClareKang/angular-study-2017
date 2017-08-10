import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home.component';
import { ProductDetailComponent } from './components/product-child.component';
import { ProductDescriptionComponent } from './components/product-description.component';
import { SellerInfoComponent } from './components/seller.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Router, Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
		path: 'product/:id',
		component: ProductDetailComponent,
		children: [
			{
				path: '',
				component: ProductDescriptionComponent
			},
			{
				path: 'seller/:id',
				component: SellerInfoComponent
			},
		]
  },
];

@NgModule({
	imports : [
		BrowserModule,
		RouterModule.forRoot(routes)
	],
	declarations : [
		AppComponent,
		HomeComponent,
		ProductDetailComponent,
		ProductDescriptionComponent,
		SellerInfoComponent
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