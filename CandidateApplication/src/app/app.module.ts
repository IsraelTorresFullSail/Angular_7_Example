import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
//import{ HttpClientModule } from '@angular/common/http';
import { CandidatesComponent } from './candidates/candidates.component';
import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidatesComponent,
    CandidateDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
