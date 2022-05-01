import { FormGroup, ValidatorFn } from '@angular/forms';

export function userNamePasswordDiferentes(formGroup: FormGroup)  {
  const userName = formGroup.get('userName')?.value.trim();
  const password = formGroup.get('password')?.value.trim();

  if(userName + password) {
    return userName === password? { userNamePasswordDiferentes: true }: null;
  }

  return null;
}
