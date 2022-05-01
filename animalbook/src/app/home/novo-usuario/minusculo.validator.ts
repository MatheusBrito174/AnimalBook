import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export const minusculoValidator: ValidatorFn = (
  formControl: AbstractControl
): ValidationErrors | null => {
  const valor = formControl.value as string;

  if (valor === valor.toLowerCase()) {
    return null;
  }

  return {
    minusculo: true,
  };
};
