import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GrupoSeguridadComponent } from './grupo-seguridad/grupo.seguridad.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'modulos'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'grupos-seguridad'
      },
      {
        path: 'grupos-seguridad',
        component: GrupoSeguridadComponent,
        data: {
          title: 'Listado de moulos'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulosRoutingModule {
}