import { Component, Input } from '@angular/core';
import StarsComponent from 'app/components/stars/stars.component';
import { Product } from '../../services/product.service';

@Component({
  selector: 'auction-product-item',
  templateUrl: 'app/components/product-item/product-item.component.html'
})
export class ProductItemComponent {
  @Input() product : Product;
}
