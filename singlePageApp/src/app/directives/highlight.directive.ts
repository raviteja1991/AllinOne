import { Directive, Input } from '@angular/core';
import { ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @Input('highlight') price;
  constructor(private el: ElementRef) {

  }
  @HostListener('mouseover')
  changeBorder() {
    if (this.price > 15000)
      this.el.nativeElement.style.border = "2px solid red";
    else if (this.price > 11000)
      this.el.nativeElement.style.border = "2px solid green";
    else
      this.el.nativeElement.style.border = "2px solid black";
  }

  @HostListener('mouseover')
  retainOriginal() {
    this.el.nativeElement.style.border = "none";
  }
}
