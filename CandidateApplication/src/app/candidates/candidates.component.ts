import { Component, OnInit } from '@angular/core';
import { Candidate } from '../candidate';
import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {

  candidates: Candidate[];

  constructor(private candidateService: CandidateService) { }

  ngOnInit() {
    this.getCandidates();
  }

  getCandidates(): void {
    this.candidateService.getCandidates()
        .subscribe(candidates => this.candidates = candidates);
    
  }

  add(first_name: string): void {
    first_name = first_name.trim();
    if (!first_name) { return; }
    this.candidateService.addCandidate({ first_name } as Candidate)
      .subscribe(candidate => {
        this.candidates.push(candidate);
      });
  }

  delete(candidate: Candidate): void {
    this.candidates = this.candidates.filter(h => h !== candidate);
    this.candidateService.deleteCandidate(candidate).subscribe();
  }
}
