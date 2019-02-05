import { Component, OnInit } from '@angular/core';
import { Candidate } from '../candidate';
import { CandidateService } from '../candidate.service';  

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  candidates: Candidate[] = [];

  constructor(private candidateService: CandidateService) { }

  ngOnInit() {
    this.getCandidates();
  }

  getCandidates(): void {
    this.candidateService.getCandidates()
    .subscribe(candidates => this.candidates = candidates.slice(1, 5));
  }

}
