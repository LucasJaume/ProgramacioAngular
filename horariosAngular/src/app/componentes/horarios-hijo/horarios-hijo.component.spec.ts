import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorariosHijoComponent } from './horarios-hijo.component';

describe('HorariosHijoComponent', () => {
  let component: HorariosHijoComponent;
  let fixture: ComponentFixture<HorariosHijoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorariosHijoComponent]
    });
    fixture = TestBed.createComponent(HorariosHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
