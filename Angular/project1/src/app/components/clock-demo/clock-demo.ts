import { Component, inject } from '@angular/core';
import { ClockService } from '../../services/clock-service';

@Component({
  selector: 'app-clock-demo',
  imports: [],
  templateUrl: './clock-demo.html',
  styleUrl: './clock-demo.css',
  // standalone: false
})
export class ClockDemo {
  clockService = inject(ClockService); // Dependency Injection

  // constructor(private clockService:ClockService){ // Dependency Injection
  // }

  ngOnInit() {
    console.log("clock Comp:", this.clockService.getCurrentTime())
  }
}
