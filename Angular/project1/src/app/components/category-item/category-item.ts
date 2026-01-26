import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-category-item',
  imports: [],
  templateUrl: './category-item.html',
  styleUrl: './category-item.css',
  inputs: ['categoryObj'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryItem {
  categoryObj: any;
  prevlabel: string | undefined;

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngDoCheck() {
    console.log('CategoryItem Do check')
    if (this.categoryObj && this.categoryObj.label !== this.prevlabel) {
      this.prevlabel = this.categoryObj.label;
      this.cdr.markForCheck();
    }
  }
  // ngAfterContentInit() {
  //   console.log('category item ngAfterContentInit')
  // }
  // ngAfterContentChecked() {
  //   console.log('category item ngAfterContentChecked')
  // }
  // ngAfterViewInit() {
  //   console.log('category item ngAfterViewInit')
  // }
  // ngAfterViewChecked() {
  //   console.log('category item ngAfterViewChecked')
  // }
}
