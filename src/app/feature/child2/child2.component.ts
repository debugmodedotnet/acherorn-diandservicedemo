import { Component, OnInit } from '@angular/core';
import { IConfigEntity } from 'src/app/config.entity';
import { LogService } from '../../log.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  message? : string; 
  Token ? : IConfigEntity
  constructor(private logService : LogService) { }

  ngOnInit(): void {
    this.message = this.logService.sayHello("Child 2");
    this.Token = this.logService.getToken();
  }

}
