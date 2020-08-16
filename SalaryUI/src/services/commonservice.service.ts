import { Injectable } from '@angular/core';
import * as data from '../assets/app-config.json';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  constructor() { }  

  getToolBarFromConfig(): any {    
    return data.toolBar;
    
  }
}
