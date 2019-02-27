import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CrisisRoutingModule } from './crises-routing.module';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';

@NgModule({
  declarations: [
  CrisisCenterComponent,
  CrisisCenterHomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    CrisisRoutingModule
  ]
})
export class CrisisModule {}
