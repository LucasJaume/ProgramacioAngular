import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaHorarioComponent } from './alta-horario.component';

describe('AltaHorarioComponent', () => {
  let component: AltaHorarioComponent;
  let fixture: ComponentFixture<AltaHorarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltaHorarioComponent]
    });
    fixture = TestBed.createComponent(AltaHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
