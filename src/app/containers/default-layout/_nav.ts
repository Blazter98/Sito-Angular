import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Inicio',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },

  {
    name: 'Listado de modulos',
    url: '/modulos/grupos-seguridad',
    iconComponent: { name: 'cil-calculator' },
  },
  {
    name: 'ABC Modulos',
    url: '/modulos/abc-modulos',
    iconComponent: { name: 'cil-columns' },
  },
  {
    name: 'Asignar Grupos',
    url: '/modulos/asignar-grupos',
    iconComponent: { name: 'cil-book' },
  },
  {
    name: 'Reportes Tutores',
    url: '/modulos/reportes-tutores-asignados',
    iconComponent: { name: 'cil-notes' },
  }
];
