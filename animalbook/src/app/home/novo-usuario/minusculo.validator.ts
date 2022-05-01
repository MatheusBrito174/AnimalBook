import { AbstractControl } from '@angular/forms';

export function minusculoValidator(formControl: AbstractControl) {
  const valor = formControl.value as string;

  if (valor === valor.toLowerCase()) {
    return null;
  }

  return {
    minusculo: true,
  };
}
