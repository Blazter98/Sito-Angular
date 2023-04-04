import { Component, OnInit } from '@angular/core';
import { IconSetService } from '@coreui/icons-angular';
import { freeSet } from '@coreui/icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-asignar-grupos',
  templateUrl: './asignar-grupos.component.html',
  styleUrls: ['./asignar-grupos.component.scss']
})
export class AsignarGruposComponent implements OnInit {
  visible = false;
  gruposTutores: any[] = [];
  gruposTutoresForm: FormGroup;
  tutors: any[] = [];
  coordinadores: any[] = [];
  carreras: any[] = [];
  especialidades: any[] = [];
  periodos: any[] = [];
  filter = '';

  constructor(private iconSet: IconSetService, private formB: FormBuilder){
    this.iconSet.icons = { ...freeSet };
    this.gruposTutoresForm = this.formB.group({
      tutor: ["Seleccionar", Validators.required],
      fechaInicio: ["" , Validators.required],
      coordinadorTutoreo: ["Seleccionar" , Validators.required],
      unidadAcademica: ["Seleccionar" , Validators.required],
      carrera: ["Seleccionar" , Validators.required],
      especialidad: ["Seleccionar" , Validators.required],
      periodo: ["Seleccionar" , Validators.required],
      grupo: ["Seleccionar" , Validators.required]
    })
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.tutors = [
      { no: 'A01672', nombre: 'ABRAHAM ISAIAS RUBALCAVA LOPEZ' },
      { no: 'B00708', nombre: 'ABRIL ARELI LLAMAS MARTINEZ' },
      { no: 'A01804', nombre: 'ADOLFO VICENTE SALAS MENESES' },
      { no: 'B00759', nombre: 'ADRIAN ALEJANDRO GUADARRAMA VILLICAÑA' },
      { no: 'B00480', nombre: 'ALBERTO RUVALCABA ALONSO' },
      { no: 'A01801', nombre: 'ALDO MIGUEL HERNANDEZ RAMIREZ' },
      { no: 'A01524', nombre: 'ALEJANDRA KARINA TORRES VICTORIA' },
      { no: 'A00054', nombre: 'ALEJANDRO LOPEZ PONCE' },
      { no: 'A00193', nombre: 'ALEJANDRO MORALES MANJARREZ' },
      { no: 'B00660', nombre: 'ALEJANDRO SANCHEZ PEREZ' },
      { no: 'A00616', nombre: 'ALETHIA MUÑOZ BUSTOS' },
      { no: 'A01861', nombre: 'ALEXIA BRAND GALINDO' },
      { no: 'A00581', nombre: 'ALFONSO RODRIGUEZ HUERTA' },
      { no: 'A00349', nombre: 'ALMA AZUCENA CARMONA RUIZ ESPARZA' }
    ]
    this.coordinadores = [
      'ANA CECILIA VELAZQUEZ LOPEZ',
      'DEISSY JUDITH LOZA MARQUEZ',
      'ESMERALDA FIGUEROA CARMONA',
      'JAQUELINE DENISSE RAMIREZ MARTINEZ',
      'JUAN FRANCISCO TORRES DIAS',
      'JULIANA ESTHER MORALES LEON',
      'LETICIA ADELAIDA DE LEON GARCIA',
      'LIDIA ALEJANDRA GONZALES OROZCO'
    ]
    this.periodos = [
      'Enero – Abril 2022',
      'Abril – Agosto 2022',
      'Agosto – diciembre 2022',
      'Enero – Abril 2023',
      'Abril – Agosto 2023',
      'Agosto – diciembre 2023'
    ]
  }

  addGruposTutores(data: any){
    if(this.gruposTutoresForm.valid){
      this.gruposTutores.push(data);
      this.gruposTutoresForm.reset();
    }
  }

  openModal(event: any) {
    this.visible = event;
  }

  toggleLiveDemo() {
    this.visible = !this.visible;
  }

  selectUA(event: any){
    const value = event.target.value;
    if(value == 'Universidad Tecnologica de Aguascalientes'){
      this.carreras = [
        'TSU en Administracion',
        'TSU en Contaduria',
        'TSU en Desarrollo de Negocios',
        'TSU en Energia Renovable',
        'TSU en Logistica',
        'TSU en Mantenimiento',
        'TSU en Mecanica',
        'TSU en Mecatronica',
        'TSU en Paramedico',
        'TSU en Procesos Industriales',
        'TSU en Tecnologias de la Informacion'
      ]
    }else if(value == 'Universidad Tecnologica de Aguascalientes Lic.'){
      this.carreras = [
        'ING en Desarrollo y Gestion de Software',
        'ING en Mantenimiento Industrial',
        'ING en Mecatrónica'
      ]
    }else {
      this.carreras = [];
    }
  }

  selectES(event: any){
    const value = event.target.value;
    switch(value){
      case 'Seleccionar':
        this.especialidades = [];
        break
      case 'TSU en Administracion':
        this.especialidades = [
          'Administracion y Evaluacion de Proyectos',
          'Capital Humano',
          'Capital Humano Cuatrimestre Cero',
          'Formulacion y Evaluacon de Proyectos',
          'Formulacion y Evaluacon de Proyectos Cero',
          'Recursos Humanos'
        ];
        break
      default:
        break;
    }
  }

  selectTutor(value: string){
    this.gruposTutoresForm?.get('tutor')?.setValue(value);
    this.toggleLiveDemo();
  }
}
