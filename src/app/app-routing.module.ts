import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard";
import { NologinGuard } from "./guards/nologin.guard";

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./Front-end/auth/login/login.module').then(m => m.LoginPageModule),
    canActivate: [NologinGuard]
  },
  {
    path: '',
    loadChildren: () => import('./Front-end/pages/tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate : [AuthGuard],
  },
  {
    path: 'register',
    loadChildren: () => import('./Front-end/auth/register/register.module').then( m => m.RegisterPageModule),
    canActivate : [NologinGuard]
  },
  {
    path: 'recuperar-contrasena',
    loadChildren: () => import('./Front-end/auth/recuperar-contrasena/recuperar-contrasena.module').then( m => m.RecuperarContrasenaPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
