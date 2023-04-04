import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteTutoresAsignadosComponent } from './reporte-tutores-asignados.component';

describe('ReporteTutoresAsignadosComponent', () => {
  let component: ReporteTutoresAsignadosComponent;
  let fixture: ComponentFixture<ReporteTutoresAsignadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteTutoresAsignadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteTutoresAsignadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
