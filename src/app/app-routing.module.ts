import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PolicyListComponent } from './policy-list/policy-list.component';
import { PolicyNewComponent } from './policy-new/policy-new.component';

const routes: Routes = [
  { path: 'policies', component: PolicyListComponent },
  { path: 'policynew', component: PolicyNewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
