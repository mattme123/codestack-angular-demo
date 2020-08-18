import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  get<T = any>(url: string, message: string): Observable<T> {
    return this.http.get<T>(url)
      .pipe(
        tap(
          () => this.onSuccess(message), //success 
          () => console.log('Error happend'), //error
          () => console.log('Complete') //complete
        ));
  }

  post<T = any>(url: string, payload: any): Observable<T> {
    return this.http.post<T>(url, payload)
      .pipe(
        tap(
          () => console.log('Success'), //success 
          () => console.log('Error happend'), //error
          () => console.log('Complete') //complete
        ));
  }

  delete<T = any>(url: string): Observable<T> {
    return this.http.delete<T>(url)
      .pipe(
        tap(
          () => console.log('Success'), //success 
          () => console.log('Error happend'), //error
          () => console.log('Complete') //complete
        ));
  }

  onSuccess(message: string) {
    console.log(message);
  }
}
