import { TestBed, async, inject } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
import { AuthService } from './../services/auth.service';
import { MockAuthService } from './../services/mock-auth.service';

let mockAuthService = new MockAuthService();

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard, { provide: AuthService, useValue: mockAuthService }] // Override Real Service
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
