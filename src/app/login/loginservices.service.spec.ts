import { TestBed, inject } from '@angular/core/testing';

import { LoginservicesService } from './loginservices.service';

describe('LoginservicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginservicesService]
    });
  });

  it('should be created', inject([LoginservicesService], (service: LoginservicesService) => {
    expect(service).toBeTruthy();
  }));
});
