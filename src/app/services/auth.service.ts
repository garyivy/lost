import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from './../../environments/environment';

const HAS_ACCEPTED_TERMS = 'hasAcceptedTerms';
const TRUE = 'true';
const FALSE = 'false';

@Injectable()
export class AuthService {
  private isAuthorizedSubject = new BehaviorSubject<boolean>(false); //https://stackoverflow.com/questions/39494058/behaviorsubject-vs-observable
  public isAuthorized : Observable<boolean>;

  constructor() {
    if(environment.production) {
      window.localStorage.setItem(HAS_ACCEPTED_TERMS,TRUE); // TODO: Remove
    }

    if(!environment.production) {
      window.localStorage.removeItem(HAS_ACCEPTED_TERMS);       
    }

    let hasAcceptedTerms = (window.localStorage.getItem(HAS_ACCEPTED_TERMS) || FALSE) === TRUE;
    this.isAuthorized = this.isAuthorizedSubject.asObservable();
    this.isAuthorizedSubject.next(hasAcceptedTerms);
  }

  recordTermsAcceptance() {
    window.localStorage.setItem(HAS_ACCEPTED_TERMS,TRUE);
    this.isAuthorizedSubject.next(true);
  }

  removeTermsAcceptance() {
    window.localStorage.removeItem(HAS_ACCEPTED_TERMS);
    this.isAuthorizedSubject.next(false); 
  }
}
