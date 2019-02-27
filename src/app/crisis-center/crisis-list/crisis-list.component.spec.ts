import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { crisisListComponent } from './crisis-list.component';

describe('crisisListComponent', () => {
  let component: crisisListComponent;
  let fixture: ComponentFixture<crisisListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ crisisListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(crisisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
