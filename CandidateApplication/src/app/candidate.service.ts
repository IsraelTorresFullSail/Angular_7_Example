import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Candidate } from './candidate';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  private candidatesUrl = 'api/candidates';   //URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getCandidates(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(this.candidatesUrl)
    .pipe(
      tap(_ => this.log('fetched candidates')),
      catchError(this.handleError('getCandidates', []))
    );
  }

  getCandidateNo404<Data>(id: number): Observable<Candidate> {
    const url = `${this.candidatesUrl}/?id=${id}`;
    return this.http.get<Candidate[]>(url)
      .pipe(
        map(candidates => candidates[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} candidate id=${id}`);
        }),
        catchError(this.handleError<Candidate>(`getCandidate id=${id}`))
      );
  }

  getCandidate(id: number): Observable<Candidate> {
    const url = `${this.candidatesUrl}/${id}`;
    return this.http.get<Candidate>(url).pipe(
    tap(_ => this.log(`fetched candidate id=${id}`)),
    catchError(this.handleError<Candidate>(`getCandidate id=${id}`))
  );
  }

  searchCandidates(term: string): Observable<Candidate[]> {
    if (!term.trim()) {
      // if not search term, return empty candidate array.
      return of([]);
    }
    return this.http.get<Candidate[]>(`${this.candidatesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found candidates matching "${term}"`)),
      catchError(this.handleError<Candidate[]>('searchCandidates', []))
    );
  }

  addCandidate (candidate: Candidate): Observable<Candidate> {
    return this.http.post<Candidate>(this.candidatesUrl, candidate, httpOptions).pipe(
      tap((newCandidate: Candidate) => this.log(`added candidate w/ id=${newCandidate.id}`)),
      catchError(this.handleError<Candidate>('addCandidate'))
    );
  }

  deleteCandidate (candidate: Candidate | number): Observable<Candidate> {
    const id = typeof candidate === 'number' ? candidate : candidate.id;
    const url = `${this.candidatesUrl}/${id}`;
  
    return this.http.delete<Candidate>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted candidate id=${id}`)),
      catchError(this.handleError<Candidate>('deleteCandidate'))
    );
  }

  updateCandidate (candidate: Candidate): Observable<any> {
    return this.http.put(this.candidatesUrl, candidate, httpOptions).pipe(
      tap(_ => this.log(`updated candidate id=${candidate.id}`)),
      catchError(this.handleError<any>('updateCandidate'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`CandidateService: ${message}`);
  }

  

  
}
