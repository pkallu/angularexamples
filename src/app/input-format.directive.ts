import { Directive,
  HostListener,
  ElementRef,
  Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format;
  constructor(private el: ElementRef) { }

    @HostListener('blur') onBlur() {
      if (this.format === 'lowercase') {
        const value = this.el.nativeElement.value;
        this.el.nativeElement.value = value.toLowerCase();

      } else if (this.format === 'uppercase') {
        const value = this.el.nativeElement.value;
        this.el.nativeElement.value = value.toUpperCase();

      }
    }
}
