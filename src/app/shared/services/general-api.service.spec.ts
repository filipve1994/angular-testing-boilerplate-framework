import { TestBed } from '@angular/core/testing';

import { GeneralApiService } from './general-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { getTranslocoModule } from '@transloco/transloco-testing.module';

describe('GeneralApiService', () => {
  let service: GeneralApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      imports: [HttpClientTestingModule, getTranslocoModule()],
      providers: [GeneralApiService]
    });
    service = TestBed.inject(GeneralApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
