import { TestBed, inject } from '@angular/core/testing';
import { Http } from '@angular/http';
import { EchoService } from './echo.service';
import { promise } from 'selenium-webdriver';

let mockHttp = new class {
  constructor() {}
	get: (phrase: string) => Promise<any>;	
}

describe('EchoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EchoService, { provide: Http, useValue: mockHttp}]
    });
  });

  it('should be created', inject([EchoService], (service: EchoService) => {
    expect(service).toBeTruthy();
  }));
});
