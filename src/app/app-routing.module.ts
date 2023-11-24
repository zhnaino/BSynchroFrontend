import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInfoComponent } from './user-info/user-info.component';
import { AccountFormComponent } from './account-form/account-form.component';

const routes: Routes = [
  { path: 'user-info', component: UserInfoComponent },
  { path: 'open-account', component: AccountFormComponent },
  { path: '', redirectTo: '/open-account', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}