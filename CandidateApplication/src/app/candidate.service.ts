import { Injectable } from '@angular/core';
import { Candidate } from './candidate';
import { CANDIDATES } from './mock-candidates';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private messageService: MessageService) { }

  getCandidates(): Observable<Candidate[]>{
    this.messageService.add('CandidateService: fetched candidates');
    return of (CANDIDATES);
  }

  getCandidate(id: number): Observable<Candidate> {
    this.messageService.add(`CandidateService: fetched candidate id=${id}`);
    return of(CANDIDATES.find(candidate => candidate.id === id));
  }

  
}
