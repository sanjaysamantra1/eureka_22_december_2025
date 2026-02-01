import { Component } from '@angular/core';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { AsyncSubject, BehaviorSubject, interval, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-demo1',
  imports: [],
  templateUrl: './subject-demo1.html',
  styleUrl: './subject-demo1.css',
})
export class SubjectDemo1 {
  ngOnInit() {
    // this.observable_demo();
    // this.subject_demo();
    // this.behaviorSubject_demo();
    // this.replaySubject_demo();
    this.asyncSubject_demo();
  }

  observable_demo() {
    // publisher
    const numPublisher = interval(1000);
    //Subscriber (we have option to only read the value)
    numPublisher.subscribe(val => console.log('Value: ', val));
  }

  subject_demo() {
    const carSubject = new Subject();
    // carSubject can be used to read/write
    carSubject.next('Tata');
    carSubject.subscribe(car => console.log('Subscriber-1: ', car));
    carSubject.next('Honda');
    carSubject.subscribe(car => console.log('Subscriber-2: ', car));
    carSubject.next('Maruti');
    carSubject.next('Hyundai');
  }
  behaviorSubject_demo() {
    const carSubject = new BehaviorSubject('');
    carSubject.next('Tata');
    carSubject.subscribe(car => console.log('Subscriber-1: ', car));
    carSubject.next('Honda');
    carSubject.subscribe(car => console.log('Subscriber-2: ', car));
    carSubject.next('Maruti');
    carSubject.next('Hyundai');
  }
  replaySubject_demo() {
    const carSubject = new ReplaySubject();
    carSubject.next('Tata');
    carSubject.subscribe(car => console.log('Subscriber-1: ', car));
    carSubject.next('Honda');
    carSubject.subscribe(car => console.log('Subscriber-2: ', car));
    carSubject.next('Maruti');
    carSubject.next('Hyundai');
  }
  asyncSubject_demo() {
    const carSubject = new AsyncSubject();
    carSubject.next('Tata');
    carSubject.subscribe(car => console.log('Subscriber-1: ', car));
    carSubject.next('Honda');
    carSubject.subscribe(car => console.log('Subscriber-2: ', car));
    carSubject.next('Maruti');
    carSubject.next('Hyundai');
    carSubject.complete();
  }
}
