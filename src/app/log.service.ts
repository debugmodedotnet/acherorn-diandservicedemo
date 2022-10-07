import { Inject, Injectable } from '@angular/core';
import { AppComponent } from './app.component';
import { IConfigEntity } from './config.entity';
import { configToken } from './config.token';
import { UpatedlogService } from './upatedlog.service';

//console.log('I am part of final output bundle');

@Injectable({
  providedIn:'any'
})
export class LogService {


  static  objectCount = 0; 
  constructor(@Inject(configToken) private config : IConfigEntity) {
    LogService.objectCount = LogService.objectCount + 1; 
    console.log('Number of Logservice objects' , LogService.objectCount);
   }


  sayHello(name : string)
  {
    return "Hello - " + name; 
  }

  getToken(){
    return this.config; 
  }
}


// this service is singelton 
// this service is avaiable in whole app 
// this service is tree-shakable 


// step  1: create a service ng g s App

// step 2 : provide the service 

// step 3 : Inject the Service

// step 4 : use the service

// 1. are you useing  service ?

// 2. have you injected the service ?

