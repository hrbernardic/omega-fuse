import { TestBed } from '@angular/core/testing';

import { RhetosService } from './rhetos.service';

describe('RhetosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RhetosService = TestBed.get(RhetosService);
    expect(service).toBeTruthy();
  });
});
