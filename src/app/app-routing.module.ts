import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { BeforeloginGuard } from './shared/gaurds/beforelogin.guard';

const routes: Routes = [
  {
    path:"auth",
    loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate:[BeforeloginGuard]
  },
  {
    path:"admin",
    loadChildren:() => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate:[BeforeloginGuard]
  },
  {
    path:"**",
    component:LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
