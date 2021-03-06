import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { HeroService } from '../hero.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})

export class HeroDetailComponent implements OnInit {
  hero$: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService
  ) { }
  ngOnInit() {
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => 
        this.service.getHero(params.get('id')))
    );
  }
  gotoHeroes(hero: Hero) {
    let heroId = hero ? hero.id : null;
    this.router.navigate(['/heroes', {id: heroId, foo: 'foo'}]);
  }
}