import { Component, OnInit } from '@angular/core';
import { crisis } from '../crisis';
import { crisisService } from '../crisis.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PARAMETERS } from '@angular/core/src/util/decorators';


@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.scss']
})
export class crisisListComponent implements OnInit {
  CRISES$: Observable<crisis[]>;
  selectedId: number;
  

  constructor(private crisisService: crisisService,
              private route: ActivatedRoute) { 
              }
  ngOnInit() {
    this.CRISES$ = this.route.paramMap.pipe(
      switchMap(params => {
        // + before params.get() turn the string into a number
        this.selectedId = +params.get('id');
        return this.crisisService.getCRISES();
      })
    );
  }
}
