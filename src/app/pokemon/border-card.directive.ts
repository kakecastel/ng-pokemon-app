import { Directive ,ElementRef , HostListener, Input} from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  constructor(private el : ElementRef) {
  	this.setHeight(180);
  	this.setBorder('#f5f5f5');
   }
   @Input('pkmnBorderCard') borderColor: string;
  setHeight(height : number){
  	this.el.nativeElement.style.height=height+'px';
   }
   setBorder(color : string ){
   let border='solid 4px' + color;
  	this.el.nativeElement.style.border=border;
   }
   @HostListener('mouseenter') onMouseEnter(){
  	this.setBorder(this.borderColor);
  	console.log(`la valeur de console log   ${this.borderColor}`);
   }
   @HostListener('mouseleave') onMouseLeave(){
  	this.setBorder('#f5f5f5');
   }

}
