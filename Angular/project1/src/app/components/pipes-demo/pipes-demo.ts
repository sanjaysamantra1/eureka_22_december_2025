import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { interval, map } from 'rxjs';
import { OrdinalPipe } from '../../custom-pipes/ordinal-pipe';
import { MySortPipe } from '../../custom-pipes/my-sort-pipe';

@Component({
  selector: 'app-pipes-demo',
  imports: [
    CommonModule,
    FormsModule,
    OrdinalPipe,
    MySortPipe
  ],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
  userName: string = 'Sachin tEnDULkAr';
  mySal: number = 5000;
  dateObj = new Date();
  user = { firstName: 'Virat', lastName: 'Kohli', age: 40, address: 'India' };
  cars = ['Tata', 'Honda', 'Maruti', 'Hyundai', 'Toyota'];
  num = interval(1000);
  time = interval(1000).pipe(map(val => new Date().toLocaleTimeString()));
  myNum = 21;

  arr = [50, 10, 40, 20, 30];

  testFun(){
    console.log('I am test function')
  }
}
