import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Crisis } from './crisis';
import { CRISES } from './mock-crises';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {
  constructor(private messageService: MessageService) { }
  getCrises(): Observable<Crisis[]> {
    // TODO: send the message _after_ fetching the CRISES
    this.messageService.add('CrisisService: fetched CRISES');
    return of(CRISES);
  }
  getCrisis( id: number | string ): Observable<Crisis> {
    return this.getCrises().pipe(
      map((crises: Crisis[]) => crises.find( crisis => crisis.id === +id ))
    );
  }
}