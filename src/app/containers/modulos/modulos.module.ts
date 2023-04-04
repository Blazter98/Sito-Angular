import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { ModulosRoutingModule } from './modulos.routing.module';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { AbcModulosComponent } from './abc-modulos/abc-modulos.component';
import { GrupoSeguridadComponent } from './grupo-seguridad/grupo.seguridad.component';
import { AsignarGruposComponent } from './asignar-grupos/asignar-grupos.component';

import { 
  TableModule, 
  GridModule,
  FormModule,
  ModalModule,
  PaginationModule,
  AlertModule,
  NavModule,
  BadgeModule,
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { UserPipe } from '../../core/user.pipe';
import { ReporteTutoresAsignadosComponent } from './reporte-tutores-asignados/reporte-tutores-asignados.component';

@NgModule({
  declarations: [
    GrupoSeguridadComponent,
    UserPipe,
    AbcModulosComponent,
    AsignarGruposComponent,
    ReporteTutoresAsignadosComponent
  ],
  imports: [
    CommonModule,
    ModulosRoutingModule,
    FormsModule,
    ReactiveFormsModule,    
    TableModule,
    GridModule,
    FormModule,
    IconModule,
    ModalModule,
    PaginationModule,
    AlertModule,
    NavModule,
    BadgeModule,
    
    DocsComponentsModule
  ]
})
export class ModulosModule { }
