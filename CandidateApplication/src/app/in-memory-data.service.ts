import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Candidate } from './candidate';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const candidates = [
      { id: 11, first_name:'Andrew',last_name:'Graham', email:'Sincere@april.biz', gender:'Male'},
      { id: 12, first_name:'Patricia',last_name:'Lebsack', email:'Julianne.OConner@kory.org', gender:'Female'},
      { id: 13, first_name:'Dennis',last_name:'Schulist', email:'Karley_Dach@jasper.info', gender:'Male'},
      { id: 14, first_name:'Nicholas',last_name:'Runolfsdottir', email:'Sherwood@rosamond.me', gender:'Male'},
      { id: 15, first_name:'Brandon',last_name:'Matt', email:'matt89@gmail.com', gender:'Male'},
      { id: 16, first_name:'Christina',last_name:'Angelino', email:'angelino80@yahoo.com', gender:'Female'},
      { id: 17, first_name:'Elena',last_name:'McDonald', email:'mcdonald_eli@hotmail.com', gender:'Female'},
      { id: 18, first_name:'Clementina',last_name:'DuBuque', email:'Rey.Padberg@karina.biz', gender:'Female'},
      { id: 19, first_name:'Kurtis',last_name:'Weissnat', email:'Telly.Hoeger@billy.biz', gender:'Male'},
      { id: 20, first_name:'Ervin',last_name:'Howell', email:'Shanna@melissa.tv', gender:'Male'}
    ];
    return {candidates};
  }

  getId(candidates: Candidate[]): number {
    return candidates.length > 0 ? Math.max(...candidates.map(candidate => candidate.id)) + 1 : 11;
  }

  constructor() { }
}
