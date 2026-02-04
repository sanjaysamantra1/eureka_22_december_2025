import { FormDemo1 } from './../form-demo1/form-demo1';
import { SignalDemo1 } from './../signal-demo1/signal-demo1';
import { SubjectDemo1 } from './../subject-demo1/subject-demo1';
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
import { EmployeeCrud } from '../employee-crud/employee-crud';
import { ObservableDemo1 } from '../observable-demo1/observable-demo1';
import { ObservableDemo2 } from '../observable-demo2/observable-demo2';
import { ObservableDemo3 } from '../observable-demo3/observable-demo3';
import { TodoList } from '../todo-list/todo-list';
import { TodoAdd } from '../todo-add/todo-add';
import { SignalDemo2 } from '../signal-demo2/signal-demo2';
import { TemplateForm } from '../template-form/template-form';
import { ModelDrivenForm } from '../model-driven-form/model-driven-form';
import { RouterOutlet } from '@angular/router';

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
    // CommentList
    // EmployeeCrud
    // ObservableDemo1
    // ObservableDemo2
    // ObservableDemo3
    // SubjectDemo1
    // TodoList,
    // TodoAdd
    // SignalDemo1
    // SignalDemo2
    // FormDemo1
    // TemplateForm
    // ModelDrivenForm
    RouterOutlet
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class Body {
  flag = true;
}
