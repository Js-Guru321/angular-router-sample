import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';

@NgModule({
  declarations: [CrisisDetailComponent, CrisisListComponent, CrisisCenterComponent],
  imports: [
    CommonModule,
    CrisisCenterRoutingModule
  ]
})
export class CrisisCenterModule { }
