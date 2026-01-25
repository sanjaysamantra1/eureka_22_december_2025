import { PipesDemo } from './../pipes-demo/pipes-demo';
import { Component, ViewEncapsulation } from '@angular/core';
import { Databinding } from '../databinding/databinding';
import { Directives } from '../directives/directives';
import { MyModal } from '../my-modal/my-modal';
import { ProductList } from '../product-list/product-list';
import { UserList } from '../user-list/user-list';
import { ParentDemo } from '../parent-demo/parent-demo';

@Component({
  selector: 'app-body',
  imports: [
    // Databinding
    // Directives
    // MyModal
    // ProductList,
    // UserList
    // PipesDemo
    ParentDemo
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class Body {

}
