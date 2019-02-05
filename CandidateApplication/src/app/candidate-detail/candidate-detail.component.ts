import { Component, OnInit, Input } from '@angular/core';
import { Candidate } from '../candidate';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.css']
})

export class CandidateDetailComponent implements OnInit {

@Input() candidate: Candidate;

  constructor(
    private route: ActivatedRoute,
    private candidateService: CandidateService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCandidate();
  }

  getCandidate(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.candidateService.getCandidate(id)
    .subscribe(candidate => this.candidate = candidate);
  }

  goBack(): void {
    this.location.back();
  }

}
