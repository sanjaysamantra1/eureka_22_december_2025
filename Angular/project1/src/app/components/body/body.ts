import { HttpDemo1 } from './../http-demo1/http-demo1';
import { PipesDemo } from './../pipes-demo/pipes-demo';
import { Component, ViewEncapsulation } from '@angular/core';
import { Databinding } from '../databinding/databinding';
import { Directives } from '../directives/directives';
import { MyModal } from '../my-modal/my-modal';
import { ProductList } from '../product-list/product-list';
import { UserList } from '../user-list/user-list';
import { ParentDemo } from '../parent-demo/parent-demo';
import { Demo1 } from '../demo1/demo1';
import { Demo2 } from '../demo2/demo2';
import { ClockDemo } from '../clock-demo/clock-demo';
import { CommentList } from '../comment-list/comment-list';

@Component({
  selector: 'app-body',
  imports: [
    // Databinding
    // Directives
    // MyModal
    // ProductList,
    // UserList
    // PipesDemo
    // ParentDemo
    // Demo1,
    // Demo2
    // ClockDemo
    // HttpDemo1
    CommentList
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class Body {
  flag = true;
}
