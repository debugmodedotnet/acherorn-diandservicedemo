import { Component, OnInit } from '@angular/core';
import { IConfigEntity } from '../config.entity';
import { LogService } from '../log.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  message? : string; 
  Token ? : IConfigEntity
  constructor(private logService : LogService) { }

  ngOnInit(): void {
    this.message = this.logService.sayHello("Orders");
    this.Token = this.logService.getToken();
  }
}
