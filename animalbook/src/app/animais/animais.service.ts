import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError } from 'rxjs';

import { environment } from './../../environments/environment';
import { Animais, Animal } from './animal';

@Injectable({
  providedIn: 'root',
})
export class AnimaisService {
  private readonly _baseUrl: string = environment.apiBaseUrl;

  constructor(private readonly _http: HttpClient) {}

  buscarAnimaisDoUsuario(userName: string): Observable<Animais> {
    return this._http.get<Animais>(`${this._baseUrl}/${userName}/photos`);
  }

  buscarPorId(id: number): Observable<Animal> {
    return this._http.get<Animal>(`${this._baseUrl}/photos/${id}`);
  }

  excluir(id: number): Observable<Animal> {
    return this._http.delete<Animal>(`${this._baseUrl}/photos/${id}`);
  }

  curtir(id: number): Observable<boolean> {
    return this._http
      .post(`${this._baseUrl}/photos/${id}/like`, {}, { observe: 'response' })
      .pipe(
        map(() => true),
        catchError((error) => {
          return error.status == HttpStatusCode.NotFound
            ? of(false)
            : throwError(() => error);
        })
      );
  }
}
