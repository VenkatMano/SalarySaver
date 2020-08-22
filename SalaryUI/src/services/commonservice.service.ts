import { Injectable } from '@angular/core';
import * as data from '../assets/app-config.json';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CalculateInput } from 'src/modules/calculatepf/models/CalculateInput';
import { CalculateOutput } from 'src/modules/calculatepf/models/CalculateOutput';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  constructor(private httpClient: HttpClient) { }  

  getToolBarFromConfig(): any {    
    return data.toolBar;    
  }

  getRestUrlFromConfig(): any {
    return data.restUrls;
  }

  calculatePfFromBackend(calculateInput: CalculateInput): Observable<CalculateOutput> {     
    return this.httpClient.post<CalculateOutput>(data.restUrls.calculatePfUrl, calculateInput);
  }
}
