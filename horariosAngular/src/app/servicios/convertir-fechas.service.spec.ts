import { TestBed } from '@angular/core/testing';

import { ConvertirFechasService } from './convertir-fechas.service';

describe('ConvertirFechasService', () => {
  let service: ConvertirFechasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvertirFechasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
