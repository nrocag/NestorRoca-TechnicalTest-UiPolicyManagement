import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'; ////Libreria de JS que se fundamenta en RX
import { retry, catchError } from 'rxjs/operators'; ////Libreria de JS que se fundamenta en RX

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  private baseApi = 'https://policymanagement-api.azurewebsites.net/policy/v1'

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': "application/json",
      'Authorization': "Bearer " + localStorage.getItem('token')
    })
  }

  constructor(public http: HttpClient) {

  }

  private handleError(error: HttpErrorResponse) {
    if (error.status >= 500) {
      alert('Ah ocurrido un fallo inesperado, intente nuevamente!');
      return throwError('Error calling the Api'); ////Redirect a pagina de error
    }

    if (error.status === 403) {
      alert('No posee permisos para ejecutar esta funcionalidad');
    }
  }

  public getAllPolicies(): Observable<any> {
    return this.http.get(`${this.baseApi}/GetAllPolicies`, this.httpOptions).pipe(
      retry(2), catchError(this.handleError)
    )
  }

  public getPolicyById(id: string): Observable<any> {
    return this.http.get(`${this.baseApi}/GetByPolicyId?id=${id}`, this.httpOptions).pipe(
      retry(2), catchError(this.handleError)
    )
  }

  public createPolicy(policy: any): Observable<any> {
    return this.http.post(
      `${`${this.baseApi}/CreatePolicy`}`,
      JSON.stringify(policy),
      this.httpOptions)
      .pipe(
        retry(0), catchError(this.handleError)
      )
  }

  public updatePolicy(policy: any): Observable<any> {
    return this.http.put(
      `${`${this.baseApi}/UpdatePolicy`}`,
      JSON.stringify(policy),
      this.httpOptions)
      .pipe(
        retry(0), catchError(this.handleError)
      )
  }

  public deletePolicy(id: string): Observable<any> {
    return this.http.delete(
      `${`${this.baseApi}/DeletePolicy?id=${id}`}`,
      this.httpOptions)
      .pipe(
        retry(1), catchError(this.handleError)
      )
  }
}
