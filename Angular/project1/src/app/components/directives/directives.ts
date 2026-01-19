
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  num: number = 4;
  cars: string[] = ['Tata', 'Honda', 'Maruti', 'Hyundai', 'Toyota'];
  selectedCar: string = '';
  user = { firstName: 'Virat', lastName: 'Kohli' };
  isActive: boolean = true;

  employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
  ];

  myStyle1 = {
    color: 'red',
    backgroundColor: 'green',
    border: '3px dashed yellow',
    margin: '10px'
  }
  myStyle2 = {
    color: 'blue',
    backgroundColor: 'red',
    border: '5px dotted purple',
    margin: '10px'
  }
  myFunction1() {
    return this.num % 2 == 0 ? this.myStyle1 : this.myStyle2;
  }
}
