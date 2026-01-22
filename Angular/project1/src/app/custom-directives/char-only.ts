import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCharOnly]',
})
export class CharOnly {
  @HostBinding('style.background-color')
  myBgColor: string = '';

  @HostListener('keyup', ['$event'])
  handleKeyUp(event: any) {
    // let regex = new RegExp(/^[0-9]*$/);
    let value = event.target.value;
    let regex = new RegExp(/^[a-z]+$/);   // Text Only
    if (!regex.test(value)) {
      this.myBgColor = 'red';
    } else {
      this.myBgColor = 'cyan';
    }
  }

}
