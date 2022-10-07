import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { IConfigEntity } from '../config.entity';
import { LogService } from '../log.service';
import { configToken } from '../config.token';


const configValue : IConfigEntity = {
  EndPoint :"Order.com",
  Token :"999999"
}
@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  providers:[{provide:configToken,useValue:configValue}]
})
export class OrdersModule { }
