import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CRISESRoutingModule } from './CRISES-routing.module';
import { crisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { crisisListComponent } from './crisis-list/crisis-list.component';

@NgModule({
  declarations: [
    crisisDetailComponent,
    crisisListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CRISESRoutingModule
  ]
})
export class CRISESModule { }
