import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  constructor(private  http: HttpClient) {
  }

  /*
  * desc: 通过用户登录
  * */
  loginWithPassword(username: string, password: string): Observable<any> {
    let url: '/auth/oauth/token';
    return this.http.get<any>(url).pipe(
      catchError(this.handleError("login", []))
    )
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // log to console instead
      console.error(error);
      // console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
