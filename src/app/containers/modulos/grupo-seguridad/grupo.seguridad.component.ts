import { Component, OnInit } from '@angular/core';
import { IconSetService } from '@coreui/icons-angular';
import { freeSet } from '@coreui/icons';

@Component({
  selector: 'app-grupo.seguridad',
  templateUrl: './grupo.seguridad.component.html',
  styleUrls: ['./grupo.seguridad.component.scss']
})
export class GrupoSeguridadComponent implements OnInit {
  groups: any[] = [];
  users: any[] = [];

  visible = false;
  show = false;
  filter = ''

  constructor(private iconSet: IconSetService){
    this.iconSet.icons = { ...freeSet };
  }

  ngOnInit(): void {
    this.getGroups();
  }

  getGroups(){
    this.groups = [
      {
        no: 11233,
        nombre: 'ANA JAZMIN GARPA ORTEGA',
        select: false
      },
      {
        no: 16845,
        nombre: 'ARACELI AGUILERA DAMIAN',
        select: false
      },
      {
        no: 2241,
        nombre: 'FLOR DE MA DE JESUS ORTEGA LANDEROS',
        select: false
      },
      {
        no: 1935,
        nombre: 'FRANCISCO JAVIER TRUJILLO SILVA',
        select: false
      },
      {
        no: 13925,
        nombre: 'GERARDO ROMO CUELLAR',
        select: false
      },
      {
        no: 11417,
        nombre: 'JOSE DAVID GARCIA MARTINEZ',
        select: false
      },
      {
        no: 29276,
        nombre: 'KELLY CAROLINA MARTINEZ VALADEZ',
        select: false
      },
      {
        no: 25562,
        nombre: 'LUZ FERNANDA RODRIGUEZ SANCHEZ',
        select: false
      },
      {
        no: 1232,
        nombre: 'MARIA CECILIA SEGURA GONZALEZ',
        select: false
      },
      {
        no: 1969,
        nombre: 'MARIA DEL CARMEN CRUZ RANGEL',
        select: false
      },
      {
        no: 1925,
        nombre: 'MONICA GONZALES RAMIREZ',
        select: false
      }
    ]
  }

  selectAll(){
    for(let group of this.groups) {
      group.select = !group.select;
    }
  }

  toggleLiveDemo() {
    this.visible = !this.visible;
    this.users = [
      {
        no: 28576,
        nombre: 'AMERICA JOSELYN',
        apellidos: 'AGUILERA ESPINOSA',
        tipo: 'Alumno',
        select: false
      },
      {
        no: 37509,
        nombre: 'LUIS ALBERTO',
        apellidos: 'AGUILERA ESPINOSA',
        tipo: 'Alumno',
        select: false
      },
      {
        no: 10992,
        nombre: 'GABRIELA',
        apellidos: 'AGUILERA GONZALES',
        tipo: 'Alumno',
        select: false
      },
      {
        no: 16194,
        nombre: 'TERESA ISABEL',
        apellidos: 'AGUILERA GRANADOS',
        tipo: 'Alumno',
        select: false
      },
      {
        no: 1753,
        nombre: 'CLAUDIO ENRIQUE',
        apellidos: 'AGUILERA HERNANDEZ',
        tipo: 'Alumno',
        select: false
      },
      {
        no: 22641,
        nombre: 'EDUARDO SEBASTIAN',
        apellidos: 'AGUILERA HERNANDEZ',
        tipo: 'Alumno',
        select: false
      },
      {
        no: 29107,
        nombre: 'ERNESTO',
        apellidos: 'AGUILERA HERNANDEZ',
        tipo: 'Empleado',
        select: false
      },
      {
        no: 21188,
        nombre: 'MARIANA JASMIN',
        apellidos: 'AGUILERA LEON',
        tipo: 'Alumno',
        select: false
      },
      {
        no: 1380,
        nombre: 'JONATHAN AZAEL',
        apellidos: 'AGUILERA MARTINEZ',
        tipo: 'Alumno',
        select: false
      },
      {
        no: 12473,
        nombre: 'MARIA AURORA',
        apellidos: 'AGUILERA MENDOZA',
        tipo: 'Alumno',
        select: false
      },
      {
        no: 25675,
        nombre: 'MARIA ISABEL',
        apellidos: 'AGUILERA MONTAÑEZ',
        tipo: 'Empleado',
        select: false
      }
    ]
  }

  openModal(event: any) {
    this.visible = event;
  }

  addUser(){
    this.show = !this.show;
    setTimeout(() => { this.show = !this.show }, 3000)
  }
}
