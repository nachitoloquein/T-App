import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { AuthGuard } from "../../../guards/auth.guard";
import { TeaDetailComponent } from '../../pages/tea-detail/tea-detail.component'

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../../pages/home/home.module').then( m => m.HomePageModule),
        canActivate : [AuthGuard]
      },
      {
        path: 'favoritos',
        loadChildren: () => import('../../pages/favoritos/favoritos.module').then( m => m.FavoritosPageModule),
        canActivate : [AuthGuard]
      },
      {
        path: 'perfil',
        loadChildren: () => import('../../pages/perfil/perfil.module').then( m => m.PerfilPageModule),
        canActivate : [AuthGuard]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      },
      {
      path: 'te/:id',
      component: TeaDetailComponent,
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class TabsPageRoutingModule {}
