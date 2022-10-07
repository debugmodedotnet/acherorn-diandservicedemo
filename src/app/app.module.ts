import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './feature/child2/child2.component';
import { LogService } from './log.service';
import { UpatedlogService } from './upatedlog.service';
import { Child3Component } from './child3/child3.component';
import { GlobalErrorService } from './global-error.service';
import { IConfigEntity } from './config.entity';
import { configToken } from './config.token';
import { FeatureModule } from './feature/feature.module';


const flag = false; // api 

// const getService = () => {
//     if(flag){
//       return new LogService;
//     }
//     else {
//       return new UpatedlogService;
//     }
// }

const configValue : IConfigEntity = {
  EndPoint :"Home.com",
  Token :"123456789"
}
@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureModule
  ],
  // providers: [ 
  //    {provide:LogService,useFactory:getService},
  //    {provide:UpatedlogService,useExisting:LogService},
  //   {provide:ErrorHandler,useClass:GlobalErrorService}
  // ],
  providers: [ 
    
    {provide:configToken,useValue:configValue}
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
