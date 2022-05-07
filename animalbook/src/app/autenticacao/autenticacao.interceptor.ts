import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AutenticacaoInterceptor implements HttpInterceptor {
  constructor(private readonly _tokenService: TokenService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this._tokenService.possuiToken()) {
      let headers = request.headers;

      headers = headers.append(
        'x-access-token',
        this._tokenService.buscarToken()
      );

      request = request.clone({ headers });
    }

    return next.handle(request);
  }
}
