import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { PostsComponent } from './pages/posts/posts.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';


const routes: Routes = [{
  path: '',
  component: BlankLayoutComponent,
  children: [
    { path: '', component: HomeComponent },
    { path: 'posts', component: PostsComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
