import { Injectable } from '@angular/core';
import { Candidate } from './candidate';
import { CANDIDATES } from './mock-candidates';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  getCandidates(): Candidate[]{
    return CANDIDATES;
  }

  constructor() { }
}
