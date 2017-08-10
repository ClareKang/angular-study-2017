import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { ProductDetailComponent } from './components/product.component';
import { LuxuryModule } from './components/luxury/luxury.module';

@Component({
  selector: 'app',
	template : `
    <a [routerLink]="['/']">Home</a>
    <a [routerLink]="['/product']">Product</a>
    <a [routerLink]="['/luxury']">Luxury Items</a>
    <router-outlet></router-outlet>
	`
})
class AppComponent {}

@NgModule({
	imports : [
    BrowserModule,
    LuxuryModule,
		RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'product',
        component: ProductDetailComponent,
      },
    ])
	],
	declarations : [
		AppComponent,
    HomeComponent,
    ProductDetailComponent,
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
