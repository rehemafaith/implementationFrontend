import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {Gyna} from './gyna';
@Injectable({
  providedIn: 'root'
})
export class GynaService {
// Base url
baseurl = 'http://localhost:8080/gynacare/gyna';
   
  constructor(private http: HttpClient) { }

    // Http Headers
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        
      })
    }

    getAllGyna(): Observable<Gyna[]>{
      const endpoint = 'fetchgyna';
      return this.http.get<Gyna[]>(`${this.baseurl}/${endpoint}`).pipe(
        retry(1),
        catchError(this.errorHandl)
      )
      
    
    
    }
    getGyna(id): Observable<Gyna[]>{
      const endpoint = 'fetchgynadetails';
      return this.http.get<Gyna[]>(`${this.baseurl}/${endpoint}/${id}`).pipe(
        retry(1),
        catchError(this.errorHandl)
      )
      
    
    
    }
    // Error handling
  errorHandl(error: HttpErrorResponse) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
