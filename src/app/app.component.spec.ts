import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { MockAuthService } from './services/mock-auth.service';

let mockAuthService = new MockAuthService();

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [{ provide: AuthService, useValue: mockAuthService }] // Override Real Service

    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render a header', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('header').textContent).toBeTruthy();
  }));

  it('should render an echo link for authorized users', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    mockAuthService.recordTermsAcceptance();
    fixture.detectChanges();    
    async(() => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelectorAll('li')[1].textContent).toContain('Echo');  
    })
  }));

  it('should not render an echo link for unauthorized users', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    mockAuthService.removeTermsAcceptance();
    fixture.detectChanges();    
    async(() => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelectorAll('li')[1].textContent).toContain('Examples');  
    })
  }));
});
