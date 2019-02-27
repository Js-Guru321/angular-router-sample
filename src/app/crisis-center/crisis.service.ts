import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { crisis } from './crisis';
import { CRISES } from './mock-crises';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class crisisService {
  constructor(private messageService: MessageService) { }
  getCRISES(): Observable<crisis[]> {
    // TODO: send the message _after_ fetching the CRISES
    this.messageService.add('crisisService: fetched CRISES');
    return of(CRISES);
  }
  getcrisis( id: number | string ): Observable<crisis> {
    return this.getCRISES().pipe(
      map((CRISES: crisis[]) => CRISES.find( crisis => crisis.id === +id ))
    );
  }
}