import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const declarations = [

];

const imports = [
  CommonModule,
  FormsModule,
  NgbModule
];

@NgModule({
  declarations,
  imports,
  exports: [
    declarations
  ]
})
export class SharedModule { }
