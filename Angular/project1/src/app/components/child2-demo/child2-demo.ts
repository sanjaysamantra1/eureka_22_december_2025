import { Component } from '@angular/core';

@Component({
  selector: 'app-child2-demo',
  imports: [],
  templateUrl: './child2-demo.html',
  styleUrl: './child2-demo.css',
  inputs: ['achild2']
})
export class Child2Demo {
  achild2: any;
  userName = 'Sanjay Kumar';
}
