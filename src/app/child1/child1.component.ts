import { Component, OnInit } from '@angular/core';
import { IConfigEntity } from '../config.entity';
import { LogService } from '../log.service';
import { UpatedlogService } from '../upatedlog.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  providers:[]
})
export class Child1Component implements OnInit {

  message? : string;
  Token? : IConfigEntity
 constructor(private logService : LogService) { }

  ngOnInit(): void {
    this.message = this.logService.sayHello("Child 1");
    this.Token = this.logService.getToken();
  }

}
