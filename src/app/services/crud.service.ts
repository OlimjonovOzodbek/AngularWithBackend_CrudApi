import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { createmodel } from '../interfaces/createmodel';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  baseurl = 'https://localhost:7275/api/Product/';
  constructor(private http: HttpClient) {}

  getall(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseurl);
  }

  create(crMd: createmodel): Observable<string> {
    return this.http.post<string>(this.baseurl, crMd);
  }

  delete(name: string): Observable<string> {
    return this.http.delete<string>(this.baseurl + name);
  }
  update(crMd: createmodel,id:number): Observable<string> {
    return this.http.put<string>(this.baseurl+`?id=${id}`,crMd);
  }
}
