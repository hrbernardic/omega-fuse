import { async, TestBed } from '@angular/core/testing';
import { RhetosModule } from './rhetos.module';

describe('RhetosModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RhetosModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(RhetosModule).toBeDefined();
  });
});
