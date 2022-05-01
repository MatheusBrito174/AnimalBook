import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private readonly _key: string = 'token';

  buscarToken(): string {
    return localStorage.getItem(this._key) ?? '';
  }

  salvarToken(token: string): void {
    localStorage.setItem(this._key, token);
  }

  excluirToken(): void {
    localStorage.removeItem(this._key);
  }

  possuiToken(): boolean {
    return !!this.buscarToken();
  }
}
