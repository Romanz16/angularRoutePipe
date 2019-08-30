import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TaskListComponent } from './pages/home/task-list/task-list.component';
import { TaskObjectComponent } from './pages/home/task-object/task-object.component';
import { TaskPipeComponent } from './pages/home/task-pipe/task-pipe.component';

const routes: Routes = [
  { path: '', redirectTo: '/home/taskList', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent, children: [
      { path: '', redirectTo: '/taskList', pathMatch: 'full' },
      { path: 'taskList', component: TaskListComponent },
      { path: 'taskObject', component: TaskObjectComponent },
      { path: 'taskPipe', component: TaskPipeComponent }
    ]
  },
  { path: '**', redirectTo: '/home/taskList' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
