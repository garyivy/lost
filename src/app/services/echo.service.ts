import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ApiResponse } from './api-response';

//const AWS_PATH = 'http://localhost:3000/echo-translate?source=';
const AWS_PATH = 'https://3tf0oierhc.execute-api.us-east-1.amazonaws.com/dev/echo-translate?source=';

@Injectable()
export class EchoService {

  constructor(private http: Http) { }

  public Translate(phrase: string): Promise<ApiResponse<any>> {
    let promise: Promise<any> = new Promise<ApiResponse<any>>((resolve, reject) => {
      this.http.get(AWS_PATH + encodeURI(phrase))
        .toPromise()
        .then(response => resolve({ wasSuccessful: true, data: response.json().echo }));
    });

    return promise;
  }
}
