import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appPositionElement]'
})
export class PositionElementDirective implements OnInit {
  element: ElementRef;
  @Input('format') format;

  constructor(private el: ElementRef) {

    el.nativeElement.style.display = 'inline-block';
    el.nativeElement.style.padding = '15px';
    el.nativeElement.style.textTransform = 'uppercase';
    this.element = el;

  }

  @HostListener('mouseenter', ['$event']) mouseenter($event) {
      console.log('mon vini');
      this.element.nativeElement.style.fontWeight = 'bold';
      this.element.nativeElement.style.fontSize = '25px';
      this.element.nativeElement.parentNode.classList.add('parent-class');
      this.element.nativeElement.classList.add('element-class');
  }

  @HostListener('mouseleave', ['$event']) mouseleave($event) {
      this.element.nativeElement.style.fontWeight = 'normal';
      this.element.nativeElement.style.fontSize = '16px';
      this.element.nativeElement.parentNode.classList.remove('parent-class');
      this.element.nativeElement.classList.remove('element-class');
  }

  ngOnInit () {
      // not-working
      this.element.nativeElement.value += 'asd•';

      // this one ok
      if (this.format === 'lowercase') {
          this.element.nativeElement.style.textTransform = 'lowercase';
      } else if (this.format === 'uppercase') {
          this.element.nativeElement.style.textTransform = 'uppercase';
      }
  }

}
