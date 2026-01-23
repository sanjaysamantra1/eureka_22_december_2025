import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { interval, map } from 'rxjs';
import { OrdinalPipe } from '../../custom-pipes/ordinal-pipe';

@Component({
  selector: 'app-pipes-demo',
  imports: [
    CommonModule,
    FormsModule,
    OrdinalPipe
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
}
