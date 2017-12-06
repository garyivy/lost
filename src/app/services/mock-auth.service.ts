import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MockAuthService {
  private isAuthorizedSubject = new BehaviorSubject<boolean>(false); 
  public isAuthorized : Observable<boolean>;
  public hasAcceptedTerms : boolean = false;

  constructor() {}
  recordTermsAcceptance() {
    this.isAuthorizedSubject.next(true);
    this.hasAcceptedTerms = true;
  }

  removeTermsAcceptance() {
    this.isAuthorizedSubject.next(false);
    this.hasAcceptedTerms = false;    
  }
}
