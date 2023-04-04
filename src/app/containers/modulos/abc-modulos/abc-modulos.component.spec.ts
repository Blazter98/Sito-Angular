import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcModulosComponent } from './abc-modulos.component';

describe('AbcModulosComponent', () => {
  let component: AbcModulosComponent;
  let fixture: ComponentFixture<AbcModulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbcModulosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbcModulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
