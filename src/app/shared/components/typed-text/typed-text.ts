import {Component, ElementRef, ViewChild, AfterViewInit, Input} from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-typed-text',
  standalone: true,
  template: `
    <span #typedElement
          class="gradient-text bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500  bg-clip-text text-transparent ">    </span>
  `
})
export class TypedTextComponent implements AfterViewInit {

  @ViewChild('typedElement', {static: true})
  typedElement!: ElementRef;

  @Input() words: string[] = [];

  ngAfterViewInit() {

    new Typed(this.typedElement.nativeElement, {
      strings: this.words,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });

  }

}
