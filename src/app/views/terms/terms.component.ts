import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {
  public form : FormGroup;
  error: string;

  constructor(private authService : AuthService, private router : Router) { 
  }
  
  ngOnInit() {
    this.form = new FormGroup({
      chkAgree: new FormControl(false),
    });    
  }

  onSubmit() {   
    this.error = this.form.controls.chkAgree.value
      ? null
      : 'Please check the box to confirm your agreement with the Terms.';

    if(!this.error) {
      this.authService.recordTermsAcceptance();
      this.router.navigate(['echo']);
    }
  }
}
