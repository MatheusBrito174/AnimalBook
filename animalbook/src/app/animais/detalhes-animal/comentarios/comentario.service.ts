import { environment } from './../../../../environments/environment';
import { Comentario, Comentarios } from './comentario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComentarioService {
  private readonly _baseUrl: string = environment.apiBaseUrl;

  constructor(private readonly _http: HttpClient) {}

  buscar(animalId: number): Observable<Comentarios> {
    return this._http.get<Comentarios>(
      `${this._baseUrl}/photos/${animalId}/comments`
    );
  }

  criarComentario(
    animalId: number,
    commentText: string
  ): Observable<Comentario> {
    return this._http.post<Comentario>(
      `${this._baseUrl}/photos/${animalId}/comments`,
      { commentText }
    );
  }
}
