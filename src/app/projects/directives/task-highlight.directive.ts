import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTaskHighlight]',
  standalone: false
})
export class TaskHighlightDirective implements OnInit {
  @Input() isCompleted: boolean = false;

  constructor(private el: ElementRef) { }

  ngOnInit(): void { 
    this.updateColor();
  }

  private updateColor(): void {
    if (this.isCompleted) {
      this.el.nativeElement.style.color = 'green';
      this.el.nativeElement.style.fontWeight = 'bold';
      this.el.nativeElement.style.backgroundColor = 'lightgreen';
    } else {
      this.el.nativeElement.style.color = 'red';
      this.el.nativeElement.style.fontWeight = 'normal';
      this.el.nativeElement.style.backgroundColor = 'white';
    }
  }

}
