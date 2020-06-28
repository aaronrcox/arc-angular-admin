import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { PostsComponent } from 'src/app/pages/posts/posts.component';
import { MainLayoutComponent } from './main-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    MainLayoutComponent,
    HomeComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class MainLayoutModule { }
