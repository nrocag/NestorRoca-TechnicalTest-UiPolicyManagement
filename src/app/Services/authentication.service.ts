import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'; ////Libreria de JS que se fundamenta en RX
import { retry, catchError } from 'rxjs/operators'; ////Libreria de JS que se fundamenta en RX
import { Login } from '../Entities/login';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseApi = 'https://policymanagement-security.azurewebsites.net/Security/v1'

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(public http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status >= 500) {
      alert('Ah ocurrido un fallo inesperado, intente nuevamente!');
      return throwError('Error calling the Api'); ////Redirect a pagina de error
    }
  }

  public authenticate(logindata: Login): Observable<any> {
    return this.http.post(
      `${`${this.baseApi}/Authenticate`}`,
      JSON.stringify(logindata),
      this.httpOptions)
      .pipe(
        retry(0), catchError(this.handleError)
      )
  }
}
