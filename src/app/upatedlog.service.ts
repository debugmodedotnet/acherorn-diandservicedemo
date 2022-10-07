import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
// export class UpatedlogService implements LogService {

  export class UpatedlogService {
  static  objectCount = 0; 
  constructor() {
    UpatedlogService.objectCount = UpatedlogService.objectCount + 1; 
    console.log('Number of Updated Log objects' , UpatedlogService.objectCount);
   }


  sayHello(name: string): string {
    
    return "Updated Hello - " + name; 
  }
}
