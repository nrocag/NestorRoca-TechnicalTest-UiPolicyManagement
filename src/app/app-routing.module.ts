import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PolicyListComponent } from './policy-list/policy-list.component';
import { PolicyNewComponent } from './policy-new/policy-new.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'policies', component: PolicyListComponent },
  { path: 'policynew', component: PolicyNewComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
