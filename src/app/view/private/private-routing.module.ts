import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { UsersComponent } from './users/users.component';
import { AdminGuard } from '@core/guards/admin.guard';
import { LoginComponent } from './login/login.component';
import { LoggedinGuard } from '@core/guards/loggedin.guard';
import { StoreComponent } from './store/store.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent, canActivateChild: [AdminGuard], children: [
      { path: '', component: UsersComponent },
      { path: 'store', component: StoreComponent }
    ]
  },
  { path: 'login', component: LoginComponent, canActivate: [LoggedinGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
