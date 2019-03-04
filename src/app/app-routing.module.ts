import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';

const routes: Routes = [
  // Default redirect route must be put above wildcard route.
  { path: '', redirectTo: '/heroes', pathMatch: 'full' }, 
  // wildcard route
  { path: '**', component: PageNotFoundComponent },
  { path: 'compose', component: ComposeMessageComponent, outlet: 'popup'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes
      , { enableTracing: true } 
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
