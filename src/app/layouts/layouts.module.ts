import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { UiModule } from '../shared/components/ui/ui.module';



@NgModule({
  declarations: [
    MainLayoutComponent,
    BlankLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    UiModule
  ]
})
export class LayoutsModule { }
