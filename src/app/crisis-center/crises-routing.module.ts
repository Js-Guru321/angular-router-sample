import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { crisisListComponent } from './crisis-list/crisis-list.component';
import { crisisDetailComponent } from './crisis-detail/crisis-detail.component';

const routes: Routes = [
  { path: 'CRISES', component: crisisListComponent, data:{ animation: 'CRISES' } },
  { path: 'crisis/:id', component: crisisDetailComponent, data: {animation: 'crisis'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CRISESRoutingModule { }
