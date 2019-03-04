import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { MessageService } from '../message.service';
import { Crisis } from './crisis';
import { CRISES } from './mock-crises';

@Injectable({
  providedIn: 'root'
})
export class CrisisService {

  constructor( private messageService: MessageService ) { }
  getCrises(): Observable<Crisis[]>{
    this.messageService.add("CrisisService: fetched Crises");
    return of(CRISES);
  }
  getCrisis(id: number | string): Observable<Crisis>{
    console.log(id);
    return this.getCrises().pipe(
      map((crises: Crisis[]) => crises.find( crisis => crisis.id == +id ))
    );
  }
}
