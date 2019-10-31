import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class BaseService {

  requestOptions(): any {
    return { headers: this.requestHeaders(), responseType: 'text' as 'json' };
  }

  requestHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
  }
}
