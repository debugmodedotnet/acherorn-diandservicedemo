import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child2Component } from './child2/child2.component';



@NgModule({
  declarations: [Child2Component],
  imports: [
    CommonModule
  ],
  exports:[Child2Component]
})
export class FeatureModule { }
