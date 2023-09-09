import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumbersOnly]'
})
export class NumbersOnlyDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    let newValue = inputElement.value.replace(/[^0-9.,]/g, ''); // Permitir números, ponto e vírgula

    // Remover múltiplas vírgulas ou pontos e manter apenas um deles
    newValue = newValue.replace(/([.,])[.,]+/g, '$1');
    
    // Garantir que haja no máximo duas casas decimais
    const parts = newValue.split(/[.,]/);
    if (parts[1]) {
      parts[1] = parts[1].slice(0, 2);
      newValue = parts.join('.');
    }

    inputElement.value = newValue;
  }
}
