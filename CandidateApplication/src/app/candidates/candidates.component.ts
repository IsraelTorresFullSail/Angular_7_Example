import { Component, OnInit } from '@angular/core';
import { Candidate } from '../candidate';
import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {

  //selectedCandidate: Candidate;
  candidates: Candidate[];

  constructor(private candidateService: CandidateService) { }

  ngOnInit() {
    this.getCandidates();
  }

  /* onSelect(candidate: Candidate): void {
    this.selectedCandidate = candidate;
  } */

  getCandidates(): void {
    this.candidateService.getCandidates()
        .subscribe(candidates => this.candidates = candidates);
    
  }
}
