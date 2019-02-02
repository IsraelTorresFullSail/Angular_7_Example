import { Component, OnInit } from '@angular/core';
import { Candidate } from '../candidate';
import { CANDIDATES } from '../mock-candidates';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {

  candidates = CANDIDATES;
  selectedCandidate: Candidate;

  constructor() { }

  ngOnInit() {
  }

  /*candidate: Candidate = {
    id: 1,
    first_name: 'Andrew',
    last_name: 'Graham',
    email: 'Sincere@april.biz',
    gender: 'Male'
  };*/

  onSelect(candidate: Candidate): void {
    this.selectedCandidate = candidate;
  }
}
