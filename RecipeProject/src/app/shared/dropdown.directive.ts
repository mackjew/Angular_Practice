import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';
import { rendererTypeName } from '@angular/compiler';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen: boolean = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
