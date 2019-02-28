import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CrisisService } from '../crisis.service';
import { switchMap } from 'rxjs/operators';
import { Crisis } from '../crisis';
import { async } from 'q';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss']
})
export class CrisisDetailComponent implements OnInit {
  crisis$: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService
  ) { }

  ngOnInit() {
    this.crisis$ = this.route.paramMap.pipe(
      switchMap(
        (params: ParamMap) => {
          return this.service.getCrisis( params.get('id'));
        } 
      )
    );
  }

  gotoCrises( crisis: Crisis ){
    let crisisId = crisis ? crisis.id : null;
    this.router.navigate( [ '/crises', { id: crisisId, foo: 'foo' } ] );
  }

}
