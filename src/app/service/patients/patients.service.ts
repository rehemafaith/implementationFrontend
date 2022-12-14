import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {Patients} from './patients'
@Injectable({
  providedIn: 'root'
})

export class PatientsService {
// Base url
baseurl = 'http://localhost:8080/gynacare/patients';

  constructor(private http: HttpClient) { }

   // Http Headers
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      
    })
  }
  getAllPatients(): Observable<Patients[]>{
    const endpoint = 'fetchpatients';
    return this.http.get<Patients[]>(`${this.baseurl}/${endpoint}`).pipe(
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
