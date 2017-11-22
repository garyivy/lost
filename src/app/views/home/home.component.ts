import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isAuthorized$ : Observable<boolean>;
  
  constructor(private authService : AuthService) { 
    this.isAuthorized$ = this.authService.isAuthorized;
  }

  ngOnInit() {
  }
}
