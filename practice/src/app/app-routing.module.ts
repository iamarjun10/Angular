import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { JoinnowComponent } from './joinnow/joinnow.component';


const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'isRight' } },
  { path: 'about', component: AboutComponent, data: { animation: 'isRight' } },
  { path: 'course', component: CourseComponent, data: { animation: 'isLeft' } }, 
  { path: 'joinnow', component: JoinnowComponent, data: { animation: 'isRight' } } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
