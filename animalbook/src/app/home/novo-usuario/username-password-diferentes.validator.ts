import { AbstractControl } from '@angular/forms';
import { ValidationErrors, ValidatorFn } from '@angular/forms';

export const userNamePasswordDiferentes: ValidatorFn = (
  formGroup: AbstractControl
): ValidationErrors | null => {
  const userName = formGroup.get('userName')?.value.trim();
  const password = formGroup.get('password')?.value.trim();

  if (userName + password) {
    return userName === password ? { userNamePasswordDiferentes: true } : null;
  }

  return null;
};
