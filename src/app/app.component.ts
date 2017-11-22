import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuthorized$ : Observable<boolean>;

  constructor(private authService: AuthService) {
    this.isAuthorized$ = this.authService.isAuthorized;
  }
}
