import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import * as fromComponents from './components';

const declarations = [
  ...fromComponents.components
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
  ],
  entryComponents: [
    declarations
  ]
})
export class SharedModule { }
