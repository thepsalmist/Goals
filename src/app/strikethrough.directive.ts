import { Directive, HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private elem: ElementRef) {
    //this.elem.nativeElement.style.textDecoration = 'line-through';
  }
  @HostListener("click") onClicks() {
    this.textDeco("line-through")
  }
  @HostListener("dblclick") onDoubleClicks() {
    this.textDeco("None")
  }

  // create function textDeco that targets element Reference and takes in Css attribute as argument
  private textDeco(action: string) {
    this.elem.nativeElement.style.textDecoration = action;
  }
}
