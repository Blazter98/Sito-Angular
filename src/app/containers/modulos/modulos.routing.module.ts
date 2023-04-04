import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GrupoSeguridadComponent } from './grupo-seguridad/grupo.seguridad.component';
import { AbcModulosComponent } from './abc-modulos/abc-modulos.component';
import { AsignarGruposComponent } from './asignar-grupos/asignar-grupos.component';
import { ReporteTutoresAsignadosComponent } from './reporte-tutores-asignados/reporte-tutores-asignados.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'grupos-seguridad' },
      { path: 'grupos-seguridad', component: GrupoSeguridadComponent,
        data: {
          title: 'Listado de moulos'
        }
      },
      { path: 'abc-modulos', component: AbcModulosComponent,
        data: {
          title: 'ABC - Modulos'
        }
      },
      {
        path: 'asignar-grupos', component: AsignarGruposComponent,
        data: {
          title: 'Asignar-Grupos'
        }
      },
      {
        path: 'reportes-tutores-asignados', component: ReporteTutoresAsignadosComponent,
        data: {
          title: 'Reportes - Tutores - Asignados'
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