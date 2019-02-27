import { Component, OnInit, Input } from '@angular/core';
import { crisis } from '../crisis';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { crisisService } from '../crisis.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss']
})

export class crisisDetailComponent implements OnInit {
  crisis$: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: crisisService
  ) { }
  ngOnInit() {
    this.crisis$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => 
        this.service.getcrisis(params.get('id')))
    );
  }
  gotoCRISES(crisis: crisis) {
    let crisisId = crisis ? crisis.id : null;
    this.router.navigate(['/CRISES', {id: crisisId, foo: 'foo'}]);
  }
}