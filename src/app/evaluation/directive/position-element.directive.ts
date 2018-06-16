import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appPositionElement]'
})
export class PositionElementDirective implements OnInit {
  element: ElementRef;

  constructor(private el: ElementRef) {

    el.nativeElement.style.display = 'inline-block';
    el.nativeElement.style.padding = '15px';
    this.element = el;
  }

  ngOnInit () {
      // this.element.nativeElement.textContent += '•';
  }

}
