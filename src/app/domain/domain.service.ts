import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import { Domain } from './domain';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';

@Injectable()
export class DomainService {

    private headers = new Headers({'Content-Type': 'application/json',
     'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials' : 'true'});

  private condorUrl = 'http://localhost:9090/api/domain';
  private condorUrlget = 'http://localhost:9090/api/domains';  // URL to web api

  constructor(private http: Http) { }


 getFomains(): Observable<Domain[]> {
    return this.http.get(this.condorUrlget)
        .map(this.extractData2)
            .catch(this.handleError);
  }


create(str: string): Promise<Domain> {



    return this.http
      .post(this.condorUrl, JSON.stringify({str}), {headers: this.headers})
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);

    return Promise.reject(error.message || error);
  }

   private extractData(res: Response) {
       console.log(res);
       console.log(res.status);

       const body =  res.text() ? res.json() : {};
        return body.data || {};
    }

     private extractData2(res: Response) {
       console.log(res);
       const body =    res.json()  ;
            console.log(body[1]);
        return body ;
    }
}
