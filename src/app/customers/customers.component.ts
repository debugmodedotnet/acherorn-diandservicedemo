import { Component, OnInit } from '@angular/core';
import { IConfigEntity } from '../config.entity';
import { LogService } from '../log.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  message? : string; 
  Token ? : IConfigEntity
  constructor(private logService : LogService) { }

  ngOnInit(): void {
    this.message = this.logService.sayHello("Customers");
    this.Token = this.logService.getToken();
  }

}
