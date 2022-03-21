import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPage } from '../add/add.page';

import { StylePage } from './style.page';

const routes: Routes = [
  {
    path: '',
    component: StylePage
  },
  {
    path: '',
   component: AddPage
  },
  {
    path: ':id',
    loadChildren: () => import('../details/details.module').then( m => m.DetailsPageModule)

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StylePageRoutingModule {}
