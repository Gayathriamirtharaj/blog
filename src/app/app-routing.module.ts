import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogPageComponent } from './blog-page/blog-page.component';



const routes: Routes = [
  {
    path:"",
    component:NavigationComponent
  },
  {
    path:"blog-list",
    component:BlogListComponent
  },
  {
    path:"blog-page",
    component:BlogPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
