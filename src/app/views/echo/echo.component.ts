import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EchoService } from './../../services/echo.service';

@Component({
  selector: 'app-echo',
  templateUrl: './echo.component.html',
  styleUrls: ['./echo.component.scss']
})
export class EchoComponent implements OnInit {
  public form : FormGroup;
  public wasSubmitted: boolean; 
  public isBusy: boolean = false;
  
  @ViewChild('submitButton')
  submitButton: any;

  echoTranslation : string = null;

  constructor(private echoService: EchoService) { }
  
  ngOnInit() {
    this.form = new FormGroup({
      phrase: new FormControl('', [<any>Validators.required, 
        ]),
    }); 
  }

  onKeydown(event) {
    // Override default behavior of text area for enter
    if (event.key === "Enter") {
      this.submitButton.nativeElement.focus();
      this.submit({ phrase: event.target.value }, true);
    }
  }  

  submit(model: any, isValid: boolean) {
    this.wasSubmitted = true; 
    
    if(isValid && !this.isBusy) {
      this.isBusy = true;
      this.echoService.Translate(model.phrase)
        .then(result => {
          {
            this.isBusy = false;
            this.echoTranslation = result.wasSuccessful
              ? result.data || null
              : null;
          }
        }).catch( error => {
          this.isBusy = false;
          console.error(error);
          this.echoTranslation = 'There was an error processing your request.'
        });
    }
  }
}
