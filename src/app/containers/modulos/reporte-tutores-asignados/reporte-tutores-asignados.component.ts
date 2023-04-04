import { Component, OnInit } from '@angular/core';
import { IconSetService } from '@coreui/icons-angular';
import { freeSet } from '@coreui/icons';

@Component({
  selector: 'app-reporte-tutores-asignados',
  templateUrl: './reporte-tutores-asignados.component.html',
  styleUrls: ['./reporte-tutores-asignados.component.scss']
})
export class ReporteTutoresAsignadosComponent implements OnInit {
  tutors: any[] = [];
  filter = 'Seleccionar';
  isPrint = false;

  constructor(private iconSet: IconSetService){
    this.iconSet.icons = { ...freeSet };
  }

  ngOnInit(): void {
    this.getTutors();
  }

  getTutors(data?: any){
    if(data == undefined || this.filter == 'Seleccionar'){
      this.tutors = [
        {
          no: 1,
          nombre: '(A00616) ALETHIA MUÑOZ BUSTOS',
          grupo: 'AACH-1-A-6',
          carrera: 'TSU en Administracion'
        },
        {
          no: 2,
          nombre: '(B00362) CLAUDIA VERONICA MUÑOZ ESPARZA',
          grupo: 'AACH-2-A-6',
          carrera: 'TSU en Administracion'
        },
        {
          no: 3,
          nombre: '(B00440) GUILLERMO GONZALES ESPARZA',
          grupo: 'AACH-2-B-6',
          carrera: 'TSU en Administracion'
        },
        {
          no: 4,
          nombre: '(B00362) CLAUDIA VERONICA MUÑOZ ESPARZA',
          grupo: 'AACH-2-E-9',
          carrera: 'TSU en Administracion'
        },
        {
          no: 5,
          nombre: '(B00362) CLAUDIA VERONICA MUÑOZ ESPARZA',
          grupo: 'AACH-5-A-6',
          carrera: 'TSU en Administracion'
        },
        {
          no: 6,
          nombre: '(A00616) ALETHIA MUÑOZ BUSTOS',
          grupo: 'AACH-5-B-6',
          carrera: 'TSU en Administracion'
        },
        {
          no: 7,
          nombre: '(B00125) MARIA GUADALUPE RODRIGUEZ PALOMINA',
          grupo: 'AACH-5-E-6',
          carrera: 'TSU en Administracion'
        },
        {
          no: 8,
          nombre: '(B00125) OLAYA ANDRE HERNANDEZ MATA',
          grupo: 'AACH-5-E-9',
          carrera: 'TSU en Administracion'
        },
        {
          no: 9,
          nombre: '(B00125) MARIA GUADALUPE RODRIGUEZ PALOMINA',
          grupo: 'AACH-6-A-6',
          carrera: 'TSU en Administracion'
        }
      ]
    }else {
      this.tutors = [
        {
          no: 11,
          nombre: '(B00785) MARIA EUGENIA SALAZAR GUTIERREZ',
          grupo: 'AACH-8-E-9',
          carrera: 'TSU en Adminitracion'
        },
        {
          no: 12,
          nombre: '(B00125) MARIA GUADALUPE RODRIGUEZ PALOMINA',
          grupo: 'AACH-9-E-9',
          carrera: 'TSU en Administracion'
        },
        {
          no: 13,
          nombre: '(A00616) ALETHIA MUÑOZ BUSTOS',
          grupo: 'AAFEP-2-A-6',
          carrera: 'TSU en Adminitracion'
        },
        {
          no: 14,
          nombre: '(B00440) GUILLERMO GONZALES ESPARZA',
          grupo: 'AAFEP-2-B-6',
          carrera: 'TSU en Adminitracion'
        },
        {
          no: 15,
          nombre: '(B00356) ROBERTO EZEQUIEL FRANCO ZESATI',
          grupo: 'AAFEP-5-A-6',
          carrera: 'TSU en Adminitracion'
        }
      ]
    }
  }

  print(){
    this.isPrint = !this.isPrint;
    setTimeout(() => {
      window.print();
      setTimeout(() => {
        this.isPrint = !this.isPrint;
      }, 500)
    }, 300)
  }
}
