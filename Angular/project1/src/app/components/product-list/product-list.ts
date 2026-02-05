import { Component } from '@angular/core';
import * as data from './product_data.json';
import { CharOnly } from '../../custom-directives/char-only';
import { AlphaNumeric } from '../../custom-directives/alpha-numeric';
import { DisableCopyPaste } from '../../custom-directives/disable-copy-paste';
import { Zoomin } from '../../custom-directives/zoomin';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [
    CharOnly,
    AlphaNumeric,
    DisableCopyPaste,
    Zoomin,
    RouterLink
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  productArr = (data as any).default;  // inside the class
}
