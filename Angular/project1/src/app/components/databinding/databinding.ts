import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [
    FormsModule
  ],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css',
  // styles: ['h3 { color:purple; }'],
  encapsulation: ViewEncapsulation.Emulated
})
export class Databinding {
  userName: string = 'Virat Kohli';
  img_url: string = 'https://www.wisden.com/static-assets/images/players/3993.png?v=23.77';
  flag: boolean = true;
  max_length: number = 50;

  toggleFlag() {
    this.flag = !this.flag;
  }
}
