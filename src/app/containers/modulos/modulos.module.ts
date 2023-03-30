import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { ModulosRoutingModule } from './modulos.routing.module';
import { DocsComponentsModule } from '@docs-components/docs-components.module';

import { 
  TableModule, 
  GridModule,
  FormModule,
  ModalModule,
  PaginationModule,
  AlertModule
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { GrupoSeguridadComponent } from './grupo-seguridad/grupo.seguridad.component';
import { UserPipe } from '../../core/user.pipe';

@NgModule({
  declarations: [
    GrupoSeguridadComponent,
    UserPipe
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
    DocsComponentsModule
  ]
})
export class ModulosModule { }
