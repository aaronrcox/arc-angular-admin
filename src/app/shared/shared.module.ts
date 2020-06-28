import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiModule } from './components/ui/ui.module';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule,
    UiModule
  ],
  exports: [
    UiModule
  ]
})
export class SharedModule { }
