import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
	selector: '[btnDropdown]'
})
export class DropdownDirective implements OnInit {
@HostBinding('class.open') isOpen = false;

	// constructor(private elRef: ElementRef, private renderer: Renderer2) {
	// }

	ngOnInit() {
	}

	@HostListener('click') mouseclick() {
		this.isOpen = !this.isOpen;
	}

}