import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/services/base.service';
import { environment } from 'src/environments/environment';


@Injectable()
export class SearchService {
  url: string;

  constructor(private http: HttpClient, private baseService: BaseService) {
    this.url = environment.url;
  }

  searchFor(keyword: string): Observable<any> {
    return this.http.get(`${this.url}${keyword}`, this.baseService.requestOptions());
  }
}
