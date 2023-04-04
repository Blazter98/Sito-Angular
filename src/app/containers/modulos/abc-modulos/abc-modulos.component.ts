import { Component, OnInit } from '@angular/core';
import { IconSetService } from '@coreui/icons-angular';
import { freeSet } from '@coreui/icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-abc-modulos',
  templateUrl: './abc-modulos.component.html',
  styleUrls: ['./abc-modulos.component.scss']
})
export class AbcModulosComponent implements OnInit {
  moduleForm: FormGroup;
  grupos: any[] = [];
  visible = false;
  filter = '';

  constructor(private iconSet: IconSetService, private formB: FormBuilder){
    this.iconSet.icons = { ...freeSet };
    this.moduleForm = this.formB.group({
      no: [0, Validators.required],
      moduloPadre: ["Seleccionar", Validators.required],
      nombre: ["", Validators.required],
      ruta: ["", Validators.required],
      orden: ["Seleccionar", Validators.required],
      visible: [false, Validators.required],
      estado: [false, Validators.required]
    })
  }

  ngOnInit(): void {
    this.getModule();
  }

  getModule(){
    this.grupos = [
      {
        no: 87,
        moduloPadre: '',
        nombre: 'Generar grupos nuevo ingreso',
        ruta: '',
        orden: '30',
        visible: true,
        estado: false
      },
      {
        no: 94,
        moduloPadre: '',
        nombre: 'Lista de grupos grupos',
        ruta: '',
        orden: '1',
        visible: true,
        estado: false
      },
      {
        no: 107,
        moduloPadre: '',
        nombre: 'Generar grupos para examen de admision',
        ruta: '',
        orden: '37',
        visible: true,
        estado: false
      },
      {
        no: 111,
        moduloPadre: '',
        nombre: 'Listado de grupos de examen de admision',
        ruta: '',
        orden: '26',
        visible: true,
        estado: false
      },
      {
        no: 112,
        moduloPadre: '',
        nombre: 'Imprimir grupos de examen de admision',
        ruta: '',
        orden: '4',
        visible: true,
        estado: false
      },
      {
        no: 182,
        moduloPadre: '',
        nombre: 'Lista de grupos de ingles',
        ruta: '',
        orden: '10',
        visible: true,
        estado: false
      },
      {
        no: 280,
        moduloPadre: '',
        nombre: 'Grupos',
        ruta: '',
        orden: '17',
        visible: true,
        estado: true
      },
      {
        no: 441,
        moduloPadre: '',
        nombre: 'Generar grupos de ingles old',
        ruta: '',
        orden: '1',
        visible: true,
        estado: false
      }
    ]
  }

  addModule(data: any){
    if(this.moduleForm.valid){
      this.grupos.push(data);
      this.moduleForm.reset();
    }
  }

  openModal(event: any) {
    this.visible = event;
  }

  toggleLiveDemo() {
    this.visible = !this.visible;
  }
}
