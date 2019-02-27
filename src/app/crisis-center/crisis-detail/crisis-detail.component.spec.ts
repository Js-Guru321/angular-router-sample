import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { crisisDetailComponent } from './crisis-detail.component';

describe('crisisDetailComponent', () => {
  let component: crisisDetailComponent;
  let fixture: ComponentFixture<crisisDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ crisisDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(crisisDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
