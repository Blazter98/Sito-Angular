import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarGruposComponent } from './asignar-grupos.component';

describe('AsignarGruposComponent', () => {
  let component: AsignarGruposComponent;
  let fixture: ComponentFixture<AsignarGruposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarGruposComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarGruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
