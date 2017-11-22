import { Component, OnInit } from '@angular/core';
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
  
  echoTranslation : string = null;

  constructor(private echoService: EchoService) { }
  
  ngOnInit() {
    this.form = new FormGroup({
      phrase: new FormControl('', [<any>Validators.required, 
        ]),
    });    
  }

  validatePhrase(group: FormGroup) {
    /*
    if(!this.wasSubmitted) {
      return null;
    }
    */
    let phraseControl = group.get('phrase');
    let phraseToCheck = phraseControl != null
      ? phraseControl.value || ''
      : '';

    return /^Gary+$/i.test( phraseToCheck) 
      ? null
      : { gary: 'You are not allowed to use the author\s name :)'};
  }

  submit(model: any, isValid: boolean) {
    this.wasSubmitted = true; 
    
    if(isValid) {
      this.echoService.Translate(model.phrase)
        .then(result => {
          {
            this.echoTranslation = result.wasSuccessful
              ? result.data || null
              : null;
          }
        })
    }
  }
}
