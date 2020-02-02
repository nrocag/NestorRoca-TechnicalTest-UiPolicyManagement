import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs'; ////Libreria de JS que se fundamenta en RX
import { retry, catchError } from 'rxjs/operators'; ////Libreria de JS que se fundamenta en RX

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  private baseApi = 'https://localhost:44379/policy/v1'

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(public http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    return throwError('Error calling the Api');
  }

  public getAllPolicies(): Observable<any> {

    console.log("getAllPolicies(): Observable<any>");

    return this.http.get(`${this.baseApi}/GetAllPolicies`).pipe(
      retry(2), catchError(this.handleError)
    )
  }

  public createPolicy(policy: any): Observable<any> {

    console.log(policy);

    return this.http.post(
      `${`${this.baseApi}/CreatePolicy`}`,
      JSON.stringify(policy),
      this.httpOptions)
      .pipe(
        retry(2), catchError(this.handleError)
      )
  }
}
