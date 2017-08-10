import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './components/home.component';
import { ProductDetailComponent } from './components/product-child.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Router, Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { UnsavedChangesGuard } from './guards/unsaved_changes_guard';

const routes : Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
		path: 'product',
    component: ProductDetailComponent,
    canActivate : [LoginGuard],
    canDeactivate: [UnsavedChangesGuard]
  },
];

@Component({
  selector: 'app',
	template : `
		<a [routerLink]="['/']">Home</a>
    <a [routerLink]="['/product']">Product Details</a>
		<router-outlet></router-outlet>
	`
})
class AppComponent {}

@NgModule({
	imports : [
		BrowserModule,
		RouterModule.forRoot(routes)
	],
	declarations : [
		AppComponent,
		HomeComponent,
		ProductDetailComponent,
	],
	providers : [
		{
			provide : LocationStrategy,
			useClass : HashLocationStrategy,
    },
    LoginGuard,
    UnsavedChangesGuard
	],
	bootstrap : [AppComponent]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);