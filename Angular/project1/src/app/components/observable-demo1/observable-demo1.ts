import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { filter, from, interval, map } from 'rxjs';

@Component({
  selector: 'app-observable-demo1',
  imports: [
    CommonModule
  ],
  templateUrl: './observable-demo1.html',
  styleUrl: './observable-demo1.css',
})
export class ObservableDemo1 {
  // observable = Publisher  , Consumer
  ngOnInit() {
    // this.from_demo();
    this.interval_demo();
  }
  from_demo() {
    let cars = ['Tata', 'Honda', 'Maruti'];
    // convert array data to observable data
    const carsPublisher = from(cars);
    carsPublisher.subscribe({
      next: (val) => {
        console.log('Next value is:', val)
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        console.log('All Data Received')
      }
    })
  }

  numPublisher = interval(1000); // publisher

  // create publisher from another publisher
  even_num_publisher = this.numPublisher.pipe(filter(ele => ele % 2 === 0));

  // create publisher from another publisher
  square_publisher = this.numPublisher.pipe(map(ele => ele * ele));


  // create a digital clock
  time$ = this.numPublisher.pipe(map(ele => new Date().toLocaleTimeString()));


  interval_demo() {
    this.numPublisher.subscribe((val) => console.log(val)); // subscriber
  }

}
