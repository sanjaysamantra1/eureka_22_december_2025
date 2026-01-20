import { Component } from '@angular/core';
import * as data from './product_data.json';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  productArr = (data as any).default;  // inside the class
}
