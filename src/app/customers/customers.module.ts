import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { IConfigEntity } from '../config.entity';
import { LogService } from '../log.service';
import { configToken } from '../config.token';


const configValue : IConfigEntity = {
  EndPoint :"Customer.com",
  Token :"08477899"
}

@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  providers:[{provide:configToken,useValue:configValue}]
})
export class CustomersModule { }
